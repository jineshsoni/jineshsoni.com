// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jineshsoni.com',
  // GitHub Pages serves /foo/ from foo/index.html — keep canonical URLs consistent with that.
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/og/'),
    }),
  ],
  // Old Gatsby routes → new homes (rendered as meta-refresh pages on static hosts).
  redirects: {
    '/pensieve': '/',
    '/pensieve/tags': '/',
    '/archive': '/work/',
  },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
