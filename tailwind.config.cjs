/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': '#262626',
      'secondary': "#7F7F7F",
      'tertiary': "#BFBFBF",
      'white': '#FFFFFF',
      'lightblue': '#C2E5FF',
      'darkerblue': '#3A78A3',
      'blueopacity': '#D8EFFF',
      'blue': '#74DAD5',




      'grey': "#4A4A4A",
      'light-grey': "#DDDDDD"

    },
    extend: {
      fontFamily: {
        'noto-regular': 'NotoSansRegular',
        'noto-bold': 'NotoSansBold',
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
