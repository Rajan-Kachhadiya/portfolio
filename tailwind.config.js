/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      base: ['16px', '30px'],
    },
    extend: {
      colors: {
        'white': '#fff',
        'black': '#000',
        'primary': '#1e2125',
        'secondary': '#ff014f',
        'light-black': '#3c3e41',
        'body-color': '#ECF0F3',
      },
      backgroundImage: {
        'gradient-box': "linear-gradient(145deg, #e2e8ec, #ffffff);",
        'gradient-box-hover': "linear-gradient(145deg, #ff014f, #d11414);",
      },
      boxShadow: {
        'shadow-white': '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;',
      },
      spacing: {
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '60': '60px',
        '80': '80px',
        '100': '100px',
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1400px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
  },

  plugins: [],
}