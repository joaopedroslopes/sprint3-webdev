/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F4F4F4',
        'royal-blue': '#0A08A9',
        'header-blue': '#001876',
        'hover-grey': '#696565',
        'hover-light-grey': '#ACACAC'
      }
    },
  },
  plugins: [],
}