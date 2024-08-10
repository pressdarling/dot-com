/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { getViteConfig } from 'astro/config';

export default defineConfig({
  ...getViteConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        provider: 'v8',
        reportsDirectory: ['./_test-results/vite/coverage'],
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
});
