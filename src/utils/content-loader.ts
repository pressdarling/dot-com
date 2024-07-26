import { defineConfig } from 'astro/config';

const usePrivateContent = process.env.USE_PRIVATE_CONTENT === 'true';

export function loadContent(path: string) {
  if (usePrivateContent) {
    return import(`../../content/${path}`);
  } else {
    return import(`../placeholders/${path}`);
  }
}

export default defineConfig({
  // ... other config
  vite: {
    resolve: {
      alias: {
        '@content': usePrivateContent ? '../content' : './src/placeholders',
      },
    },
  },
});
