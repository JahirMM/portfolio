/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cardsBackgroundLightTheme: "#F9F6F3",
        secondaryColorLightTheme: "#FF9E13",
        primaryColorLightTheme: "#F3EDE5",
        photoColorLightTheme: "#CC841E",

        cardsBackgroundDarkTheme: "#090E24",
        secondaryColorDarkTheme: "#FCB043",
        primaryColorDarkTheme: "#03081d",
        photoColorDarkTheme: "#8C601D",
      },
    },
  },
  plugins: [],
};
