/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      firstFont: ["Bitter", "serif"],
    },
    colors: {
      primary: "#800020",
      secondary: "#D4AF37",
      offwhite: "#FFFDD0",
      grey: "#333333",
    },

    extend: {},
  },
  plugins: [],
};
