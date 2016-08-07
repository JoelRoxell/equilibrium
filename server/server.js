import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import {
  config,
  webpackConfig,
  webpackTestConfig
} from '../config';

let buildConfig = (function(nodeEnv = config.env.DEVELOPMENT) {
  switch (nodeEnv) {
    case config.env.PRODUCTION:
    case config.env.DEVELOPMENT:
      return webpackConfig;

    case config.env.TEST:
      return webpackTestConfig;

    default:
      throw new Error('Build mode bust be passed as an argument');
  }
})(process.env.NODE_ENV);

const server = express(),
  compiler = webpack(buildConfig);

// TODO: read parameters from config.
server.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/dist/',
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  historyApiFallback: true
}));

server.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

server.get('/', function(req, res) {
  res.redirect('/dist/');
});
server.use('/doc', express.static(path.resolve(__dirname, '../doc')));
server.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));

export default server;
