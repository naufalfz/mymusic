/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        header: '#3D3759',
        body: '#28243D',
        primary: '#F7A701',
        secondary: '#FEF4CB',
        textprim: '#C1C2C4',
        textdisable: '#3A3541',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
}

