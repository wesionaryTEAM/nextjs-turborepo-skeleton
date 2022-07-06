/** @type {import('tailwindcss').Config} */
const Themes = require('ui/Themes/index')
module.exports = {
  ...require('config/tailwind.config'),
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ ...Themes }],
  },
}
