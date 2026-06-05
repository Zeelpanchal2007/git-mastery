/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#F7F3EE',
        secondaryBg: '#EEE6DC',
        primaryText: '#1C1C1C',
        coffeeBrown: '#6F4E37',
        darkRoast: '#3A2A1F',
        accent: '#C08B5C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
