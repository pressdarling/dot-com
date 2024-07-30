import { defineConfig } from 'vite';
import { getViteConfig } from 'astro/config';

export default defineConfig({
  ...getViteConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'c8',
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
});