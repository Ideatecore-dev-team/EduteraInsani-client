/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        primary: "#0B4068",
        secondary: "#A88646",
        "neutral-1": "#212121",
        "neutral-2": "#74757E",
        background: "#FBF9F7",
      },
      width: {
        "base-content": "1152px",
        "width-4": "368px",
      },
    },
  },
  plugins: [],
};
