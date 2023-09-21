const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const postcssPresetMantine = require('postcss-preset-mantine')
const postcssSimpleVars = require('postcss-simple-vars')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    postcssPresetMantine(),
    postcssSimpleVars({
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em'
      }
    })
  ]
}
