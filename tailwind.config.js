const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      fontFamily: {
        normalText: ['Comic Neue', 'cursive'],
        Chewy: ['Chewy', 'cursive'],
        JotiOne: ['Joti One', 'cursive'],
        Kranky: ['Kranky', 'cursive'],
        LakkiReddy: ['Lakki Reddy', 'cursive'],
        Mansalva: ['Mansalva', 'cursive'],
        Avara: ['Avara', 'cursive'],
        title: ['Rampart One', 'cursive']
      },
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
          darkBlack: '#1B1C1E',
          primary: '#FF9797',
          secondary: '#FFBF74'
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
        },
        '.border-image-third': {
          borderImage: 'url(../assets/images/background-border3.png)',
          borderImageSlice: '40 fill',
          borderWidth: '0.5rem'
        },
        '.quest-item-background': {
          borderImage: 'url(../assets/images/quest-item-background-odd.png)',
          borderImageSlice: '0 fill',
          '&:nth-child(even)': {
            borderImage: 'url(../assets/images/quest-item-background-even.png)',
            borderImageSlice: '0 fill'
          }
        },
        '.drop-shadow-map-area': {
          filter:
            'drop-shadow(2px 2px 0px white) drop-shadow(-2px -2px 0px white)' //Apply a white border to the image
        },
        '.drop-shadow-map-area-active': {
          filter:
            'drop-shadow(2px 2px 0px white) drop-shadow(-2px -2px 0px white) drop-shadow(0 0 20px white)'
        }
      })
    })
  ]
}
