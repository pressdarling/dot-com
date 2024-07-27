import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Optionally, add any Tailwind-specific options here
    config: { path: './tailwind.config.mjs' },
    applyBaseStyles: false,
  })],
}); 