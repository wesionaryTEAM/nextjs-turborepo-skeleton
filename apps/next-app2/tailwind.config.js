const Themes = require('ui/Themes/index')
console.log('Themes', Themes)
module.exports = {
  ...require('config/tailwind.config'),
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{ ...Themes }],
  },
}
