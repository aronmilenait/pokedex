/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#3a4f78',
        'blue': '#7993b5',
        'light-blue': '#acbdd9',
        'very-light-blue': '#d5e0ed',
        'violet': '#6c739b'
      }
    },
  },
  plugins: [],
}

