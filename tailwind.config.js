module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: { 100: "#202020" },
        gray: { 10: "#f5f5f5", 20: "#858585" }
      },
      backgroundImage: {
        'marvel': "url('./src/assets/images/marvel-background.png')",
      }
    },
  },
  plugins: [],
}
