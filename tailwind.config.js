/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Darzi Brand Colors (from logo)
        'darzi-beige': '#E8DCC8',
        'darzi-cream': '#F5EFE6',
        'darzi-dark': '#2D3436',
        'darzi-brown': '#5D4E37',
        'darzi-gold': '#D4AF37',
        'darzi-taupe': '#C4B5A0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}