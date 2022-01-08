module.exports = {
   darkMode: "class",
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
      screens: {
         sm: "320px", // @media(min-width: 32px)
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },
   },
   plugins: [],
};
