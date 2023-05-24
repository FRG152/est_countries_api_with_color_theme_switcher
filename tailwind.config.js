/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      DarkBlueDarkModeElements: "hsl(209, 23%, 22%)",
      VeryDarkBlueDarkModeBackground: "hsl(207, 26%, 17%)",
      VeryDarkBlueLightModeText: "hsl(200, 15%, 8%))",
      DarkGrayLightModeInput: "hsl(0, 0%, 52%)",
      VeryLightGrayLightModeBackground: "hsl(0, 0%, 98%)",
      WhiteDarkModeTextLightModeElements: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
