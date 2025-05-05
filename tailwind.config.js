config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--main-color)',
        background: 'var(--bg-color)',
        footer: 'var(--footer-bg-color)',
      },
      fontFamily: {
        title: 'var(--title-font-family)',
        content: 'var(--content-font-family)',
        placeholder: 'var(--placeholder-font-family)',
        subtitle: 'var(--subtitle-font-family)',
        button: 'var(--button-font-family)',
        navbar: 'var(--navbar-font-family)',
      },
      fontSize: {
        title: 'var(--title-font-size)',
        content: 'var(--content-font-size)',
        placeholder: 'var(--placeholder-font-size)',
        subtitle: 'var(--subtitle-font-size)',
        button: 'var(--button-font-size)',
        navbar: 'var(--navbar-font-size)',
      },
      lineHeight: {
        title: 'var(--title-line-height)',
        content: 'var(--content-line-height)',
        subtitle: 'var(--subtitle-line-height)',
        navbar: 'var(--navbar-line-height)',
      }
    },
  },
  plugins: [],
}