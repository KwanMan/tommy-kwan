const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')

const { env, isDevelopment } = require('./app/lib/env')

const config = {
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : false,
  entry: [
    'regenerator-runtime/runtime',
    './app/client/index'
  ],
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'app/assets'),
    filename: isDevelopment ? 'bundle.js' : 'bundle.[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app/client'),
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (isDevelopment) {
  config.entry.unshift('webpack-hot-middleware/client')
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
} else {
  config.plugins = config.plugins.concat([
    new UglifyJsPlugin(),
    new OptimizeJsPlugin({ sourceMap: false })
  ])
}

module.exports = config
