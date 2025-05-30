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
        main: "#e4f4f2",
        background: "#ffffff",
      },
      fontFamily: {
        content: ["var(--content-font-family)"],
        title: ["var(--title-font-family)"],
        subtitle: ["var(--subtitle-font-family)"],
      },
      fontSize: {
        title: "60px",
        content: "20px",
        subtitle: "36px",
        button: "16px",
        navbar: "16px",
      },
      lineHeight: {
        title: "60px",
        content: "20px",
        subtitle: "36px",
      },
    },
  },
  plugins: [],
};
