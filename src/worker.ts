/**
 * Canonical host + HTTPS enforcement for static assets.
 * Runs before assets (run_worker_first) so www / http / workers.dev variants
 * 301 to the apex HTTPS URL instead of serving duplicate HTML — which GSC
 * reports as "Alternate page with proper canonical tag" / "Page with redirect".
 */
const CANONICAL_HOST = 'finfulencers.com';

interface Env {
  ASSETS: Fetcher;
}

function isAlternateHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === `www.${CANONICAL_HOST}` ||
    host.endsWith('.workers.dev') ||
    host.endsWith('.pages.dev')
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(request.url);
      const needsHttps = url.protocol === 'http:';
      const needsHostRedirect = isAlternateHost(url.hostname);

      if (needsHttps || needsHostRedirect) {
        const canonical = new URL(
          url.pathname + url.search,
          `https://${CANONICAL_HOST}`,
        );
        return Response.redirect(canonical.toString(), 301);
      }

      return env.ASSETS.fetch(request);
    } catch {
      // Avoid unhandled Worker exceptions surfacing as Search Console 5xx
      return new Response('Service temporarily unavailable', {
        status: 503,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'retry-after': '60',
          'x-robots-tag': 'noindex',
        },
      });
    }
  },
};
