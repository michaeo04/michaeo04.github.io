// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your GitHub Pages URL
  site: 'https://michaeo04.github.io',

  // Base path (use '/' for username.github.io)
  base: '/',

  // Integrations
  integrations: [
    sitemap(),
  ],

  // Markdown configuration
  markdown: {
    shikiConfig: {
      theme: 'github-light', // Matches warm aesthetic
      wrap: true,
    },
  },

  // Output mode (static for GitHub Pages)
  output: 'static',

  // Build configuration
  build: {
    assets: '_astro', // Asset directory name
  },

  // Server configuration (for local development)
  server: {
    port: 3000,
    host: true,
  },
});
