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
        'dark-blue': '#03082d',
        'header-blue': '#001876',
        'hover-grey': '#696565',
        'hover-light-grey': '#ACACAC',
        'text-grey': '#A7A7A7',
        'line-blue': '#0024AD',
        'cyan-e': '#00FFFF',

        'penske': '#cba65f',
        'cupra': '#194997',
        'andretti': '#ed3124',
        'envision': '#00be26',
        'ert': '#3c3c3c',
        'jaguar': '#000',
        'mahindra': '#dd052b',
        'maserati': '#001489',
        'mclaren': '#ff8000',
        'nissan': '#c3002f',
        'porsche': '#d5001c'
      }
    },
  },
  plugins: [],
}