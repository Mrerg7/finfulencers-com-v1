# finfulencers.com

Buyer-facing site for the **finfulencers.com** domain, which is for sale. The pages explain the financial-influencer category and route serious inquiries to **sales@desertrich.com**.

Built as a static Astro site for Cloudflare Workers Static Assets.

## Stack

- **Astro** (static output, trailing slashes, no adapter)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **@astrojs/sitemap**
- Deployed with **Wrangler** (`workers_dev = false`; apex and www are the custom domains)

## Pages

| URL | Job |
| --- | --- |
| `/` | Sale homepage, dossier, inquiry |
| `/acquire/` | What transfers, who it fits, offer form |
| `/what-is-a-finfluencer/` | Category definition, sourced |
| `/finfluencer-platforms/` | Platforms plus FCA / FINRA context |
| `/faq/` | Buyer and category FAQ, FAQPage schema |

Spelling on purpose: the category term in press is “finfluencer.” The domain brand is **finfulencers.com**.

## Development

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npm run deploy
```

`wrangler.toml` serves `./dist` and redirects www, plain HTTP, and leftover preview hosts to `https://finfulencers.com` from `src/worker.ts`.

## SEO notes

On-page work here is titles, canonicals, internal links, unique pages, FAQ and article structured data, a real Open Graph image, and a sitemap. Moz-style Domain Authority is mostly a backlink metric. It is not something a template can switch on. Link-worthy pages are the definition and the platforms piece. Do not buy links.

Google Search Console is already verified in the document head. After deploy, resubmit `https://finfulencers.com/sitemap-index.xml`.

## Domain inquiries

**sales@desertrich.com**

The inquiry form opens the visitor’s email app. This site does not store leads.

---

Repo: https://github.com/Mrerg7/finfulencers-com-v1
