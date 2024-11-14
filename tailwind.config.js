/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lobster': ['Lobster', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },
    fontSize: {
      'header-text': '6vw',
    },
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/header.webp')"
      },
      colors: {
        'baker-yellow': '#F4B411',
        'text-color': '#FFFAE7',
        'nav-active': '#9B7104',
      }
    },
  },
  plugins: [],
}

