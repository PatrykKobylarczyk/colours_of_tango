/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        red: "#AF2622",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        monteCarlo: ["MonteCarlo"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "gradient-layout":
          "linear-gradient(to bottom,rgba(3,11,15,1) 0,rgba(3,11,15,.35) 15%,rgba(3,11,15,0.1) 25%,rgba(3,11,15, 0) 50%,rgba(3,11,15,.15) 75%, rgba(3,11,15,.35) 85%,rgba(3,11,15,1) 100%);",
        "gradient-layout-lighter":
          "linear-gradient(to bottom,rgba(3,11,15,1) 0,rgba(3,11,15,.35) 10%, rgba(3,11,15,0) 25%,  rgba(3,11,15, 0) 75%,rgba(3,11,15,.35) 90%, rgba(3,11,15,1) 100%);",
        "gradient-layout-darker":
          "linear-gradient(to top ,rgba(3,11,15,1) 0,rgba(3,11,15,.7) 15%,rgba(3,11,15,.6) 25%,rgba(3,11,15, .5) 50%,rgba(3,11,15,.45) 75%, rgba(3,11,15,.4) 75%,rgba(3,11,15, .2) 85%, rgba(3,11,15, .3) 100%);",
        "darker-gradient-bg":
          "linear-gradient(to right, rgba(3,11,15, 1) 0, rgba(3,11,15, .8) 15%, rgba(3,11,15, .6) 35%, rgba(3,11,15,0.2) 50%, rgba(3,11,15,0.2) 75%, rgba(3,11,15,0) 100%)",
        "gradient-left-side":
          "linear-gradient(to right, rgba(3,11,15, .8) 0, rgba(3,11,15, .6) 25%, rgba(3,11,15, .4) 35%, rgba(3,11,15,.2) 50%, rgba(3,11,15,0.1) 75%,rgba(3,11,15,.3) 85%, rgba(3,11,15,.8) 100%)",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
