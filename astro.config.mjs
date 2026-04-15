// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://alinedmooner.dev/',
  integrations: [robotsTxt()],
  vite: {
    plugins: [tailwindcss()]
  }
});