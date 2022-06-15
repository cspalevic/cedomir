const plugin = require("tailwindcss/plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        ul: {
          listStyle: "initial",
          padding: "initial",
          margin: "10px 30px",
        },
        li: {
          listStyle: "initial",
          padding: "initial",
          margin: "0 0 5px 0",
        },
        span: {
          fontSize: theme("fontSize.md"),
        },
        p: {
          fontSize: theme("fontSize.base"),
        },
        b: {
          fontSize: theme("fontSize.base"),
        },
        i: {
          fontSize: theme("fontSize.base"),
        },
        h1: {
          fontSize: theme("fontSize.4xl"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
        },
      });
      addComponents({});
      addUtilities({});
    }),
    autoprefixer(),
  ],
};
