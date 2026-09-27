// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const UPDATED = '2026-09-27';

// https://astro.build/config
export default defineConfig({
  site: 'https://finfulencers.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = UPDATED;
        if (path === '/') {
          item.changefreq = 'weekly';
          item.priority = 1;
        } else if (path.startsWith('/acquire')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (path.startsWith('/faq')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
