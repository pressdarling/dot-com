import globals from 'globals';
import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  {
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
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