import webpack from 'webpack'
var _debug = require('debug')
var debug = _debug('app:bin:compiler')
import webpackConfig from '../config/webpack.config'

const compiler = webpack(webpackConfig)
debug('Runing compiler')

/* TODO Build bundle */
compiler.run((err, stats) => {
  if (err) {
    return debug(err)
  }

  var jsonStats = stats.toJson()

  if (jsonStats.errors.length > 0) {
    return console.error(jsonStats.errors)
  }

  if (jsonStats.warnings.length > 0) {
    console.warn(jsonStats.warnings)
  }

  console.log(webpackConfig.output.path)
  debug('-- Webpack compile completed --')
  debug('Compiler finished.')
})
