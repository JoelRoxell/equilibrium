import path from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// File
const config = require('./config'),
  baseWebpackConfig = require('./webpack.config.js');

let webpackTestConfig = { ...baseWebpackConfig };

webpackTestConfig.entry = [
  'webpack-hot-middleware/client?path=/__webpack_hmr',
  `${config.base_path}/${config.dir_test}/test-context.js`
];

webpackTestConfig.output = {
  path: path.join(config.base_path, 'build/tmp'),
  filename: 'bundle.js',
  publicPath: '/dist/',
  chunkFilename: '[id].js'
};

webpackTestConfig.plugins = [
  new HtmlWebpackPlugin({
    template: './test/index.html', // Load a custom template,
    hash: false,
    filename: 'index.html',
    inject: false,
    minify: {
      collapseWhitespace: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = webpackTestConfig;
