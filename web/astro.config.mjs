import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gokhangunduz.github.io',
  base: '/alpha',
  outDir: '../docs',
  trailingSlash: 'never',
  build: {
    format: 'file',
    assets: 'assets',
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
});
