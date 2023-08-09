const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        zelda: {
          bgBlackTransparent: 'rgba(0, 0, 0, 0.5)',
          blue: '#0290fe',
          darkGreen: '#0c1f0c',
          darkGray: '#2f3124',
          lightGray: '#616356',
          yellow: '#FFC800',
          lightYellow: '#FFFFBE',
          softYellow: '#f8f7d9'
        },
        pepa: {
          blue: '#C2DAFF',
          lightPink: '#FFEBF3',
          pink: '#FE619A',
          darkPink: '#F14986',
          gold: '#FFCB46',
          darkBlue: '#132A49',
          textBlue: '#474FA2',
          black: '#252525',
          darkBlack: '#1B1C1E'
        }
      },
      boxShadow: {
        yellow: 'rgba(255, 255, 190, 0.4) 0px 0px 6px 2px'
      }
    }
  },
  variants: {
    margin: ['responsive', 'even']
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.border-image-primary': {
          borderImage: 'url(../assets/images/background-border.png)',
          borderImageSlice: '70 fill',
          borderWidth: '1rem'
        },
        '.border-image-second': {
          borderImage: 'url(../assets/images/background-border2.png)',
          borderImageSlice: '20 fill',
          borderWidth: '0.5rem'
        }
      })
    })
  ]
}
