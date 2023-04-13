/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      "gray": '#3C3C3C',
      "stroke": '#CCCCCC',
      'lightblue': '#E4F3FF',
      'blue': '#3A78A3',
    },
    extend: {
      spacing: {
        'xs': "0.5rem",
        'sm': "0.75rem",
        'md': "1.5rem",
        'lg': "2.5rem",
        'xl': "3rem"
      },
      fontFamily: {
        'comfortaa-regular': 'ComfortaaRegular',
        'comfortaa-bold': 'ComfortaaBold',
        'comfortaa-light': 'ComfortaaLight',
        'comfortaa-medium': 'ComfortaaMedium',
        'comfortaa-semibold': 'ComfortaaSemiBold',
      },
      screens: {
        'xs': '500px',
        'lmd': '900px'
      },
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
