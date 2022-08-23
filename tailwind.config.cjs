/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        saira: ['Saira Extra Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
