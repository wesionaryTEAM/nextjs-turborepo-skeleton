const withTM = require('next-transpile-modules')(['ui'], {
  resolveSymlinks: false,
})

module.exports = withTM({
  reactStrictMode: true,
})
