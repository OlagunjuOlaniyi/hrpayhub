// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file", // ⬅️ This forces Astro to output as payslip.html
  },
  base: isProd ? '/' : '/',
  integrations: [react()]
});