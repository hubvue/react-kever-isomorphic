const browserConfig = require('./config/webpack.browser')

const serverConfig = require('./config/webpack.server')
const CONFIG_MAP = {
  client: browserConfig,
  server: serverConfig,
}
const webpackEnv = process.env.WEBPACK_ENV
module.exports = CONFIG_MAP[webpackEnv]
