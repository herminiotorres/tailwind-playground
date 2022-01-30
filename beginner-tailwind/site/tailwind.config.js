const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      },
    },
  },
  plugins: [],
}
