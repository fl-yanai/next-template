const customFont = require('./src/utils/tailwindCustomFont')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'error-color': '#FF0000',
      },
    },
  },
  plugins: [customFont],
}
