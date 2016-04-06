var _debug = require('debug')
var debug = _debug('app:bin:compiler')
import webpackConfig from '../build/webpack.config'
import webpack from 'webpack'

const compiler = webpack(webpackConfig)
debug('Runing compiler')

/* TODO Build bundle */
compiler.run((err, compileInformation) => {
  let formatedInfo = compileInformation.toJson()
  debug('-- Webpack compile completed --')
  debug(formatedInfo.toString())

  if (err) {
    debug('Compilation error occurred...', err)
  }

  (function () {
    debug('Finished build...')
  })()
})
