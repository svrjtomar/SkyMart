/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-dark': '#121212', 
        'sky-card': '#1C1C1C', 
        'sky-neon': '#CCFF00', 
        'sky-border': '#333333' 
      }
    },
  },
  plugins: [],
}