/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#f6eafd",
        customColor: {
          default: "#e1bcf6",
          light: "#cf90f0",
          dark: "#64277c",
        },
      },
    },
  },
  plugins: [],
};
