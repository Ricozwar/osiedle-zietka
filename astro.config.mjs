// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricozwar.github.io',
  base: '/osiedle-zietka',
  vite: {
    plugins: [tailwindcss()],
  },
});
