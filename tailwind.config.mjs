/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#18C1F3',
        secondary: '#6969F3',
        accent: '#F66633',
        dark: '#420',
      },
    },
  },
  plugins: [],
};