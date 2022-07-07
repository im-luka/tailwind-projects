/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif"],
      },
      colors: {
        primaryGrayishBlue: "hsl(237, 18%, 59%)",
        primarySoftRed: "hsl(345, 95%, 68%)",
        darkBlue: "hsl(236, 21%, 26%)",
        darkerBlue: "hsl(235, 16%, 14%)",
        darkestBlue: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
