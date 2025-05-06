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
        'main': '#7c3aed',
        'background': '#e5e7eb',
        'footer': '#f9fafb',
        'tag': 'var(--tag-color)',
      },
      fontFamily: {
        'content': ['Quicksand', 'sans-serif'],
        'title': ['Quicksand', 'sans-serif'],
        'subtitle': ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'title': '60px',
        'content': '20px',
        'subtitle': '36px',
        'button': '16px',
        'navbar': '16px',
      },
      lineHeight: {
        'title': '60px',
        'content': '20px',
        'subtitle': '36px',
      },
    },
  },
  plugins: [],
};

