/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "selector" /* Class ,media, selector dia kora jay
  tailwind class e lekhar somoy dark:property dia kora jabe */,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c0d0e",
        secondary: "#667085",
        "secondary-light": "#98a2b3",
        "light-bg": "f1f2f4",
      },
      borderRadius: {
        primary: "8px",
      },
    },
  },
  plugins: [],
};
