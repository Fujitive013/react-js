/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reddit' : '#0b1416',
        'blackish' : '#0f1c1f'
      } 
      
    },
  },
  plugins: [],
}