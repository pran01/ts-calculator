/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "josefin-sans": ['"Josefin Sans"', "sans-serif"],
        "passion-conflict": ['"Passions Conflict"', "cursive"],
      },
    },
  },
  plugins: [],
};
