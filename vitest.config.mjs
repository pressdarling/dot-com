/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig(
  {
    test: {
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
  },
  {
    site: 'https://bradyclarke.com/',
    trailingSlash: 'always',
  }
);
