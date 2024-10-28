/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      transparent: "transparent",
      current: "currentColor",
      custDark1: "#0f151f",
      custDark2: "#31363F",
      custPrimary: "#76ABAE",
      custLight: "#EEEEEE",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      teal: colors.teal,
      sky: colors.sky,
    },
  },
  plugins: [],
};
