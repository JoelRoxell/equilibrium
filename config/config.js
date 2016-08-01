const path = require('path');

const config = {
  env: process.env.NODE_ENV || 'development',

  // Structure
  base_path: path.resolve(__dirname, '..'),
  dir_src: 'src',
  dir_dist: 'dist',
  dir_server: 'server',

  // Server Config
  server_host: 'localhost',
  server_port: 3000
}

module.exports = config;
