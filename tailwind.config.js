/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#092C4C',
        'secondary': "#B3B3B3",
        'button': "#1C3E6E",
      }
    },
  },
  plugins: [],
}

