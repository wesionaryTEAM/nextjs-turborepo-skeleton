const withTM = require('next-transpile-modules')(['ui'])
const { i18n } = require('./next-i18next.config')
module.exports = withTM({
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
})
