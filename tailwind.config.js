/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        secondary: "#1F1F1F",
        gray: "#A2A2A2",
        red: "#FC364C",
      },
      fontFamily: {
        manrope: ["'Manrope', sans-serif"],
      },
      backgroundImage: {
        header: "url(/images/header-image.png)",
        "body-gradient":
          "linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)",
        "main-gradient":
          "linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)",
      },
      screens: {
        lg: "980px",
      },
    },
  },
  plugins: [],
};
