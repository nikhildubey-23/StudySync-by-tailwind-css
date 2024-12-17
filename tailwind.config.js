/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-reverse': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-in-out 0.5s forwards',
        'slide-in-reverse': 'slide-in-reverse 1s ease-in-out 0.5s forwards',
      },
      width:{
        17 : "5rem"
      }
    },
  },
  plugins: [],
}

