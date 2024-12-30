/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'alpha': '#202124',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
