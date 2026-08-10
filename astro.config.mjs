// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricozwar.github.io',
  // Relative base so preview works on GitHub Pages and CDN mirrors
  base: './',
  vite: {
    plugins: [tailwindcss()],
  },
});
