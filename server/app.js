import express from 'express'
import webpack from 'webpack'
import _debug from 'debug'
let debug = _debug('app:server')
import path from 'path'

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../build/webpack.config.js'
let app = express()

let compiler = webpack(webpackConfig)
debug('Starting server...')

// TODO: read parameters from config.
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/assets/',
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  historyApiFallback: true
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

app.use('/', express.static(path.resolve(__dirname, '../www')))

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  debug('Example app listening at http://%s:%s', host, port)
})
