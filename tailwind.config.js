module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      widest: "5px",
    },
    extend: {
      colors: {
        primary: "#D84339",
        secondary: "#373234",
        dark: "#3C3D3F",
      },
      fontFamily: {
        body: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
