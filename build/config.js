import path from 'path'
import _debug from 'debug'
const debug = _debug('app:build:config')

debug('app:build:config')

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

export default config
