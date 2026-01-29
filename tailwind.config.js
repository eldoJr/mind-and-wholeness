/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6B8E23', // verde-oliva
        secondary: '#87CEEB', // azul celeste
        light: '#FAFAFA' // branco suave
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'] // sugestão de fonte espiritual
      },
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite'
      }
    }
  }
}