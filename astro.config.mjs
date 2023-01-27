import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://RichardGenH.github.io',
  base: '/astro-criteria',
  integrations: [react(), tailwind()]
});