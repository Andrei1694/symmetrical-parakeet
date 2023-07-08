/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'full': '375px'
      },
      colors: {
        yellow: {
          '400':'#FFE202'
        },
        gray: {
          '50': "#F8F7FA"
        }
      }
    },

  },
  plugins: [],
}