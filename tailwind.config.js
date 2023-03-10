/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: 0.5 },
          '50%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}