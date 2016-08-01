var webpackConfig = require('./config/webpack.config.js');
var dirConfig = require('./config/config');

//
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';
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

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'], // run in Chrome

    singleRun: true, // just run once by default

    frameworks: ['mocha'], // use the mocha test framework

    files: [
      'src/components/title/test/mount-spec.js' // just load this file
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],

    preprocessors: {
      'src/components/title/test/mount-spec.js': ['webpack']
    },

    reporters: ['dots'], // report results in this format

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    }
  });
};
