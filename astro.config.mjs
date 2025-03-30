import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";
import {rehypeChart} from './src/plugins/rehype-chart.js';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://jorgebadillo.com/',
  markdown: {
    rehypePlugins: [rehypeChart]
  }
});
