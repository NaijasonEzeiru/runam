/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["inter", "sans-serif"],
        Righteous: ["righteous", "roboto"],
        Slackey: ["Slackey", "sans-serif"],
      },
    },
  },
  plugins: [],
};
