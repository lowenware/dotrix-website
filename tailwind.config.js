const sizes = {
  4: "4px",
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  64: "64px",
  80: "80px",
  "slide": "30vh",
};
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {jura: ["Jura"]},
    container: {
      center: true,
    },
    flex: {
      auto: "1 0 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
    },
    fontSize: {
      h1: ["4rem", 1],
      h2: ["2.5rem", 1],
      h3: ["2rem", 1],
      small: [".9rem", 1],
      medium: ["1.2rem", 1.5],
      large: ["1.4rem", 1],
    },
    colors: {
      dark: {
        DEFAULT: "#11131A",
      },
      gray: {
        DEFAULT: "#1A1C22",
      },
      purple: {
        DEFAULT: "#FC71FF",
      },
      white: {
        DEFAULT: "#efefef",
      },
      red: {
        DEFAULT: "#438543",
      },
      blue: {
        DEFAULT: "#0FB7FF",
        light: "#B8CBD0",
        dark: "#60717E",
      },
      green: {
        DEFAULT: "#4CC900",
      },
    },
    extend: {
      fill: theme => theme("colors"),
      spacing: sizes,
      scale: {
        "logo": "3",
      },
    },
  },
  plugins: [],
};
