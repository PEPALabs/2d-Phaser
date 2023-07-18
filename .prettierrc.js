/** @type {import("prettier").Options} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: false,
  bracketSameLine: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  singleQuote: true
}
