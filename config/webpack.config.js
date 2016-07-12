import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import poststylus from 'poststylus';
// import ExtractTextPlugin from 'extract-text-webpack-plugin'

const webpackConfig = {
  module: {},
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    root: config.base_path,
    alias: {
      components: `${config.dir_src}/components`,
      containers: `${config.dir_src}/containers`,
      config: `${config.dir_src}/config`,
      styles: `${config.dir_src}/styles`,
      flow: `${config.dir_src}/flow`,
      services: `${config.dir_src}/services`,
      helpers: `${config.dir_src}/helpers`
    },
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    modulesDirectories: ['node_modules', 'vendor']
  }
};

// Entry Points
webpackConfig.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr',
  `${config.base_path}/${config.dir_src}/main.js`
];

// Bundle Output
webpackConfig.output = {
  path: path.join(config.base_path, 'build'),
  filename: 'bundle.js',
  publicPath: '/assets/',
  chunkFilename: '[id].js'
};

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
];

// Pre-Loaders
webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  loader: 'eslint',
  exclude: /node_modules/
}];

webpackConfig.eslint = {
  configFile: './.eslintrc',
  emitWarning: true
};

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
  test: /\.styl$/,
  loader: 'style-loader!css-loader!stylus-loader'
},
{
  test: /\.html$/,
  loader: 'raw'
}];

// Define proccesses that should be run
webpackConfig.postcss = () => {
  return [precss, autoprefixer];
};

webpackConfig.stylus = {
  use: [
    poststylus(['autoprefixer'])
  ]
};

module.exports = webpackConfig;
