// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://finfulencers.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 1.0,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Pure static for Cloudflare Workers Static Assets — no adapter required
});
