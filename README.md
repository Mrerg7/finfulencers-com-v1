# finfulencers.com

Premium domain landing page for **finfulencers.com** — a demonstration site exploring the rise of finance influencers (finfluencers) on social media.

Built as a fully static Astro site optimized for Cloudflare Workers Static Assets (global edge).

## Stack

- **Astro 7** (static output, no adapter)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **TypeScript**
- **@astrojs/sitemap**
- Deployed via **Wrangler** to Cloudflare Workers Static Assets

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build          # outputs to ./dist
npx wrangler deploy    # or npm run deploy
```

`wrangler.toml` is configured for pure static assets (`assets.directory = "./dist"`). No Worker script or `@astrojs/cloudflare` adapter is required.

## Domain Acquisition CTA

Footer routes all serious inquiries to: **sales@desertrich.com**

## Notes

- Mobile-first, responsive design
- Full Open Graph + Twitter cards
- JSON-LD structured data (WebSite + WebPage)
- `robots.txt` + auto-generated sitemap
- Content is informational / demonstration only (see footer disclaimer)

---

Local path reference: `/Users/ericrgutierrez/Sites/finfulencerscom-v1`
Repo: https://github.com/Mrerg7/finfulencers-com-v1
