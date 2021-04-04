const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      purple: colors.purple,
    },
    fontSize: {
      sm: "0.275rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
