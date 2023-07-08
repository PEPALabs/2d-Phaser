/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zelda: {
          bgBlackTransparent: "rgba(0, 0, 0, 0.5)",
          blue: "#0290fe",
          darkGreen: "#0c1f0c",
          darkGray: "#2f3124",
          lightGray: "#616356",
          yellow: "#FFC800",
          lightYellow: "#FFFFBE",
          softYellow: "#f8f7d9",
        },
        pepa: {
          blue: "#C2DAFF",
          pink: "#FFEBF3",
          gold: "#FFCB46",
          darkBlue: "#132A49",
          textBlue: "#474FA2",
        },
      },
      boxShadow: {
        yellow: "rgba(255, 255, 190, 0.4) 0px 0px 6px 2px",
      },
    },
  },
  variants: {
    margin: ["responsive", "even"],
  },
  plugins: [],
};
