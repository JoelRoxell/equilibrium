const path = require('path');

let config = {
  env: {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
    TEST: 'test'
  },

  // Structure
  base_path: path.resolve(__dirname, '..'),
  dir_src: 'src',
  dir_test: 'test',
  dir_dist: 'dist',
  dir_server: 'server',

  // Server Config
  server_host: 'localhost',
  server_port: 3000
}

module.exports = config;
