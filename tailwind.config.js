/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        oBlue: {
          400: '#0299ff',
          600: '#011b95'
        },
        oGray: {
          200: '#f3f8f9',
          400: '#9ba3ac',
          600: '#67727c'
        },
        oGreen: '#04bf5f',
      }
    },

  },
  plugins: [],
}