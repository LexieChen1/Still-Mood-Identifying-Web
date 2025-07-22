/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // required
  theme: {
    extend: {
      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'],
      },
    },
  },
  plugins: [],
};