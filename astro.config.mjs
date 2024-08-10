import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import { getViteConfig } from 'astro/config';
// import { experimental_AstroContainer as astroContainer } from 'astro/container'; // this is for vite.ts
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://bradyclarke.com',
  // experimental:
  // This should be enabled only if it's supported in your Astro version
  // astroContainer: true
  // },
  integrations: [
    tailwind({
      // Optionally, add any Tailwind-specific options here
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: false,
    }),
  ],
  vite: {
    test: {
      // Vitest configuration options
      globals: true,
      environment: 'jsdom',
    },
    // Uncomment and adjust if you need these options for server output
    // ssr: {
    //   external: ["svgo"]
    // },
  },
  // Uncomment if you're using Cloudflare adapter
  // adapter: cloudflare(),
});
