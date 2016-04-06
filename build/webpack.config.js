import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from '../build/config'
import _debug from 'debug'
import precss from 'precss'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
const debug = _debug('app:webpack:config')

debug('Reading configuration')

const webpackConfig = {
  module: {},
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    root: config.base_path,
    alias: {
      components: `${config.dir_src}/components`
    },
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules', 'vendor']
  }
}

// Entry Points
webpackConfig.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr',
  `${config.base_path}/${config.dir_src}/app.js`
]

// Bundle Output
webpackConfig.output = {
  path: path.join(__dirname, 'www'),
  filename: 'bundle.js',
  publicPath: '/assets/',
  chunkFilename: '[id].js'
}

// Plugins
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html', // Load a custom template,
    hash: false,
    filename: 'index.html',
    inject: 'body', // Inject all scripts into the body
    minify: {
      collapseWhitespace: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
  // new ExtractTextPlugin('[name].css', {
  //   allChunks: true
  // })
]

// Pre-Loaders
webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}]

webpackConfig.eslint = {
  configFile: './.eslintrc',
  emitWarning: true
}

webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: ['es2015', 'react', 'stage-0'],
    env: {
      development: {
        plugins: [
          ['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }]
        ]
      },
      production: {
        plugins: [
          'transform-react-remove-prop-types',
          'transform-react-constant-elements'
        ]
      }
    }
  }
},
{
  test: /\.css$/,
  // ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
  loader: 'style-loader!css-loader!postcss-loader'
},
{
  test: /\.html$/,
  loader: 'raw'
}]

// Define proccesses that should be run
webpackConfig.postcss = () => {
  return [precss, autoprefixer]
}

module.exports = webpackConfig
