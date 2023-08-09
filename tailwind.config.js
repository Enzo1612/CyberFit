/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: "#EEEEEE",
      blue: "#00ADB5",
      red: "#FF5722",
      white: "FFFF",
      black: "#303841",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
