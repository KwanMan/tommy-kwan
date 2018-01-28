const env = require('../lib/env')

module.exports = function dev (app) {
  if (!env.isDevelopment) return
  const webpack = require('webpack')
  const devMiddleware = require('webpack-dev-middleware')
  const hotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require('../../webpack.config')

  const compiler = webpack(webpackConfig)
  app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      modules: false
    }
  }))
  app.use(hotMiddleware(compiler))
}
