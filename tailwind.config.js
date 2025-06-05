/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "selector" /* Class ,media, selector dia kora jay
  tailwind class e lekhar somoy dark:property dia kora jabe */,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#031147",
        secondary: "##4982cc",
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
