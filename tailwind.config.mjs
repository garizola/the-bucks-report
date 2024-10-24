import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        goodLandGreen: "#00471B",
        creamCity: "#EEE1C6",
        greatLakesBlue: "#0077c0",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
