/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        signature: "#0f172a",
        signature_green: "#52BDAC",
        text_light: "#BFBFBF",
        secondary: "#13253D",
        signature_border: "#3C567C",
        signature_light: "#21324A",
        black_rgba: "rgba(0,0,0,0.54)",
        bg_lightgray: "#f1f1f1",
        bg_midblue: "#12243E",
      },
      fontFamily: {
        sans: ["Semplicita Pro", "san-serif"],
        light: ["Semplicita Pro Light", "san-serif"],
        medium: ["Semplicita Pro Medium", "san-serif"],
        semibold: ["Semplicita Pro Semibold", "san-serif"],
        bold: ["Semplicita Pro Bold", "san-serif"],
      },
      screens: {
        xs: "520px",
        "3xl": "1800px",
        "4xl": "2400px",
        "5xl": "3000px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
