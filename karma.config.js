// var webpackConfig = require('./config/webpack.config.js');
//
// webpackConfig.entry = {};
//
// var karmaConfig = function(config) {
//   config.set({
//     browse: ['Chrome'],
//     basePath: '',
//     frameworks: ['mocha'],
//
//     reporters: ['progress'],
//     // port: 9876,
//     logLevels: config.LOG_INFO,
//     // autoWatch: true,
//     singleRun: true,
//     autoWtachBatchDelay: 300,
//
//     files: [
//       'test.webpack.js'
//     ],
//
//     preprocessors: {
//       'tests.webpack.js': ['webpack', 'sourcemap']
//     },
//
//     webpack: webpackConfig,
//
//     webpackMiddleware: {
//       noInfo: true
//     }
//   });
// };
//
// module.exports = karmaConfig;

var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      './tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
