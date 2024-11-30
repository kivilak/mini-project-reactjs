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
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/header.webp')",
        'slider-1': "url('./src/assets/home/img-slider-1.webp')",
        'slider-2': "url('./src/assets/home/img-slider-2.webp')",
        'slider-3': "url('./src/assets/home/img-slider-3.webp')"
      },
      colors: {
        'baker-yellow': '#F4B411',
        'text-color': '#FFFAE7',
        'nav-active': '#9B7104',
        'body-color': 'antiquewhite',
        'baker-orange': 'rgb(255, 94, 0)',
        'hoverAddBTN': 'darkgoldenrod',
        'hoverRemoveBTN': 'rgb(190, 93, 36)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontSize: {
        'header-text': '6vw',
      },
      width: {
        'card-width': '290px',
      },
      height: {
        'card-height': '375px',
      }
    },
  },
  plugins: [],
}

