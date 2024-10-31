module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
    "./*.{html,js,jsx,ts,tsx}"  // Add this line to cover files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}