import express from 'express';
import webpack from 'webpack';
import _debug from 'debug';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackTestConfig from '../test/webpack.tests.config.js';
import config from '../config';
// import config from '../build/webpack.config'

let debug = _debug('app:server'),
  app = express(),
  compiler = webpack(webpackTestConfig); // webpack(config.webpackConfig);

// TODO: read parameters from config.
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'test.bundle.js',
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
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use('/doc', express.static(path.resolve(__dirname, '../doc')));

const server = app.listen(3000, function () {
  let port = server.address().port;

  debug('Development server listening on port', port);
});
