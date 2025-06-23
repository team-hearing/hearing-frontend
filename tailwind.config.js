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
        primary: "#323232", // "#00B493" 주석 처리된 원래 색상
        secondary: "#9E978D", // "#F8496C"
        black: "#000000", 
        white: "#FFFFFF",
        gray: {
          light: "#F4F4F4",
          "light-medium": "#E4DFE3",
          medium: "#9E978D",
          "medium-dark": "#47423E",
          dark: "#323232"
        }
      },
      fontFamily: {
        kr: ["Noto Sans KR", "sans-serif"],
        en: ["Open Sans", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.25', fontWeight: '600' }],
        'h3': ['40px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        'h6': ['20px', { lineHeight: '1.5', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};