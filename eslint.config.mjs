import eslint from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';

export default ([
  eslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,astro}'],
    rules: {
      'semi': ['error', 'always'],
      'prefer-const': 'error',
    },
  },
    ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
]);