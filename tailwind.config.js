/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      'gold': '#daa520'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}