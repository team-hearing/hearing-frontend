/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B493",
        secondary: "#F8496C",
      },
      fontFamily: {
        kr: ["Noto Sans KR", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        hero: ["170px", { lineHeight: "1" }],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};