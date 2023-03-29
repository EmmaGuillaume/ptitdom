/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'yellow': '#F5D14B',
      'purple': '#864494',
      'pink': '#D82E8A',
      'orange': '#E5813B',
      'primary': '#4A4A4A',
      'gray': '#D9D9D9',
      'light-gray': '#BFBFBF',
      'white': '#F1EAE0',
      'green': "#A1D1A9"
    },
    extend: {
      dropShadow: {
        'card': '8px 10px #D9D9D9'
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '1rem',
        'lg': '.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: []
};