/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,mjs}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryGreen: "#4d737a",
        secondaryGreen: "#93a9ad",
        fontColor: "#feffed"
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}
