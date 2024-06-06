/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        //bg
        primary: "#0B4068",
        secondary: "#A88646",
        "neutral-1": "#212121",
        "neutral-2": "#74757E",
        background: "#FBF9F7",
      },
      width: {
        "base-content": "1152px",
        "width-1": "74px",
        "width-3": "270px",
        "width-4": "368px",
        "width-5": "468px",
        "width-6": "564px",
        "width-7": "662px",
        "width-8": "955px",
      },
      height: {
        "base-content": "1152px",
        "height-0.1": "60px",
        "height-1": "74px",
        "height-3": "270px",
        "height-3.1": "290px",
        "height-4": "368px",
        "height-5": "468px",
        "height-6": "533px",
        "height-7": "662px",
      },
      padding: {
        padding5: "5px",
      },
      gap: {
        gap10: "10px",
      },
    },
  },
  plugins: [],
};
