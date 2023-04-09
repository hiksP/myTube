import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,tsx,jsx}',
  './src/components/**/*.{js,ts,tsx,jsx}'
]
export const theme = {
  extend: {
    colors: {
      main: '#f2f2f2',
      darkRed: '#ac231c',
      lightBlack: '#5e5c5d',
      lightGray: '#bcbcbc',
      darkWhite: '#eaeaea'
    },
    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0,9)'
        },
        '50%': {
          opacity: 0.3
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)'
        }
      },
      animation: {
        fade: 'fade .4s ease-in-out',
        scaleIn: 'scaleIn .4s ease-in-out'
      }
    }
  }
}
export const plugins = [
  plugin(({ addComponents }) => {
    addComponents({
      '.shadow-block': {
        display: 'block',
        boxShadow:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        animation: 'scaleIn .35s ease-in-out',
        backgroundColor: '#272532'
      }
    })
  })
]
