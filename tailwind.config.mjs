/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: { sans: ['Red Hat Text', 'system-ui', 'sans-serif'] },
    fontSize: {
      base: '0.875rem',
      md: '1.375rem',
      xl: '3.5rem',
    },
    extend: {
      colors: {
        'primary-blue': 'hsl(237, 18%, 59%)',
        'primary-red': 'hsl(345, 95%, 68%)',
        'blue-600': 'hsl(236, 21%, 26%)',
        'blue-800': 'hsl(235, 16%, 14%)',
        'blue-900': 'hsl(234, 17%, 12%)',
      },
    },
  },
  plugins: [],
};
