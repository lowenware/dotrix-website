const sizes = {
  8: "8px",
  "20vh": "20vh",
  "30vh": "30vh",
  16: "16px",
  "40vh": "40vh",
  "60vh": "60vh",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px",
  48: "48px",
  54: "54px",
  60: "60px",
  64: "64px",
  70: "70px",
  72: "72px",
  80: "80px",
  "80vh": "80vh",
  90: "90px",
  100: "100px",
  120: "120px",
  128: "128px",
  140: "140px",
  150: "150px",
  180: "180px",
  190: "190px",
  200: "200px",
  220: "220px",
  230: "230px",
  280: "280px",
  450: "450px",
  800: "800px",
  960: "960px",
  1280: "1280px",
  em: "1em",

  200: "200px", // footer-lines
  400: "400px", // footer
};
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "32px",
        lg: "64px",
        xl: "128px",
        "2xl": "128px",
      },
    },
    flex: {
      auto: "1 0 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      1: "1 1 0%",
      2: "2 2 0%",
      3: "3 3 0%",
      4: "4 4 0%",
      0: "0 0 auto",
    },
    fontSize: {
      10: ["10px", 1.5],
      12: ["12px", 1.6],
      14: ["14px", 1.6],
      18: ["18px", 1.4],
      20: ["20px", 1],
      24: ["24px", 1],
      32: ["32px", 1.3],
      48: ["48px", 1.3],
      56: ["56px", 1.3],
      72: ["72px", 1.3],
    },
    colors: {
      dark: {
        DEFAULT: "#11131A",
      },
      gray: {
        DEFAULT: "#1A1C22",
      },

      pink: {
        DEFAULT: "#FC71FF",
      },

      white: {
        DEFAULT: "#fff",
      },
      red: {
        DEFAULT: "#ff0000",
      },
      blue: {
        light: "#0FB7FF",
        50: "#92ddfc",
        100: "#E6EFF9",
      },
      green: {
        DEFAULT: "#4CC900",
      },
    },
    extend: {
      fill: (theme) => theme("colors"),
      spacing: sizes,
      maxWidth: {
        300: "300px",
        400: "400px",
        550: "550px",
        700: "700px",
        800: "800px",
        930: "930px",
        950: "950px",
        "20p": "20%",
        "1/2": "50%",
        "3/5": "60%",
      },
      scale: {
        200: "2",
        400: "4",
      },
      minWidth: {
        200: "200px",
      },
    },
  },
  plugins: [],
};
