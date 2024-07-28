import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  { languageOptions: { globals: globals.browser } },
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      semi: ['error', 'always'],
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    ...eslintPluginAstro.configs.recommended,
  },
];
