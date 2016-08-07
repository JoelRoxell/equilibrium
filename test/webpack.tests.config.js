const path = require('path');

// File
const config = require('../config/config'),
  baseWebpackConfig = require('../config/webpack.config.js');

let webpackTestConfig = baseWebpackConfig;

webpackTestConfig.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr',
  `${config.base_path}/${config.dir_test}/test-context.js`
];

webpackTestConfig.output = {
  path: path.join(config.base_path, 'build'),
  filename: 'test.bundle.js',
  publicPath: '/assets/',
  chunkFilename: '[id].js'
};

module.exports = webpackTestConfig;
