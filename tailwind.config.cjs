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
      'darkerblue': '#9CD5FF',
      // 'yellow': '#FFF172',
      // 'blue': '#74DAD5',
      // 'lightblue': '#74DAD522',
      // 'purple': '#9D69D6',
      // 'pink': '#FF7676',
      // 'orange': '#FFA44F',
      // 'green': "#76C89C",
      // 'black-op': "rgba(0, 0, 0, 0.3)",
      // 'red': "#A51810",
      // 'grey': "#4A4A4A",
      // 'light-grey': "#DDDDDD"

    },
    extend: {
      fontFamily: {
        'patrick': 'PatrickHand',
        'noto-regular': 'NotoSansRegular',
        'noto-bold': 'NotoSansBold'
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
