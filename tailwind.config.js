/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    
    screens: {
      'sm': '576px',
      'md':"768px",
      'lg': '992px',
      'xl': '1200px',
    },

    colors: {
      darkBlue: '#355592',
      orange: '#f29d0e',
      textGray: '#5c5c5c',
      shadowBlue: '#8096be',
      lightBlue: '#f1f8ff',
      textWhite: '#fff'
    },
    extend: {},
  },
  plugins: [],
}

