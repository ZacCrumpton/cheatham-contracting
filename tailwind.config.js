/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cheatham-gray": "#8B8A77", // Gray (Crayola)
      },
      fontFamily: {
        display: ["Cardo", "serif"], // headings / logo
        body: ['"GFS Didot"', "serif"],          // body copy
      },
    },
  },
  plugins: [],
};
