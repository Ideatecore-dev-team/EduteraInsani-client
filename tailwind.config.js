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
        "w1439": "1439px",
        "width-1": "74px",
        "width-2": "172px",
        "width-3": "270px",
        "width-3.1": "339px",
        "width-3.2": "342px",
        "width-4": "368px",
        "width-sm": "390px",
        "width-4.1": "466px",
        "width-5": "468px",
        "width-6": "564px",
        "width-7": "662px",
        "width-8": "955px",
        "width760": "760px",
        "width-8.1": "858px",
        "width-8.2": "826px",
        "width-9": "956px",
        "mobile-6": "342px",
        "width310": "310px",
      },
      height: {
        "base-content": "1152px",
        "height-0.1": "60px",
        "height-0.2": "62px",
        "height-1": "74px",
        "height-2": "176px",
        "height-2.1": "224px",
        "height-3": "270px",
        "height-3.1": "290px",
        "height-4": "368px",
        "height-5": "466px",
        "height-5.1": "500px",
        "height-6": "533px",
        "height-7": "662px",
      },
      padding: {
        padding170: "170px",
        padding1: "1px",
        padding5: "5px",
      },
      gap: {
        gap10: "10px",
        gap9: "9px",
      },
      borderRadius: {
        rounded32: "32px",
      },
      lineHeight: {
        leading45: "45px",
        leading31koma2: "31.2px",
      },
      letterSpacing: {
        trackingMinus072: "-0.72px",
        trackingMinus048: "-0.48px",
      },
      boxShadow : {
        shortCourse : "0px 12px 24px 0px rgba(168, 134, 70, 0.40)",
        digitalSchooling : "0px 4px 8px 0px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
};
