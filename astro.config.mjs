import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { getViteConfig } from 'astro/config';
import { experimental_AstroContainer } from 'astro/container';
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: getViteConfig({
    test: {
      // Vitest configuration options
      globals: true,
      environment: 'jsdom',
    },
  // for output: 'server'
  //
  // ssr: {
  //  external: ["svgo"]
  // },
  // adapter: cloudflare(),
  experimental: {
    astroContainer: true
  },
  integrations: [
    tailwind({
      // Optionally, add any Tailwind-specific options here
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: false,
    }),
  ],
  site: 'https://bradyclarke.com',
});
