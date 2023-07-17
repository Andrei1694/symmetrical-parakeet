/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '15px'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      },
      width: {
        // 'full': '375px'
      },
      colors: {
        yellow: {
          '400': '#FFE202'
        },
        red: {
          '400': '#FE8668'
        },
        blue: {
          '500': '#4269F2'
        },
        amber: {
          '400': '#FDBC1F'
        },
        gray: {
          '40': '#CBCBD4',
          '50': "#F8F7FA",
          '100': '#A6A6AA',
          '150': '#3A3A3A'
        }
      }
    },

  },
  plugins: [],
}