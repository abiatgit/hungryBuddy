/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,ts,jsx,tsx}",
    '!**/node_modules/**'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3', // Example for a custom aspect ratio
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

