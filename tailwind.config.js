/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
    "./src/components/Navigation/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {

      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],

}

