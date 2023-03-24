/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)",
      },
      backgroundPosition:{
        testimonial:'right 10% top 35%, left bottom'
      },
      screens:{
        xs: '480px'
      }
    },
  },
  plugins: [],
};
