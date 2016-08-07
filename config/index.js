import _config from './config';
import banner from './banner';
import _webpackConfig from './webpack.config';
import _webpackTestConfig from './webpack.test.config';

export default {
  _config,
  _webpackConfig,
  _webpackTestConfig,
  banner
};

export const config = _config,
  webpackConfig = _webpackConfig,
  webpackTestConfig = _webpackTestConfig;
