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
      'gray': '#7F7F7F',
      'light-gray': '#BFBFBF',
      'white': '#F1EAE0',
      'green': "#A1D1A9"
    },
    extend: {

      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
