import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    rules: {
      'semi': ['error', 'always'],
      'prefer-const': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    ...eslintPluginAstro.configs.recommended,
  },
];