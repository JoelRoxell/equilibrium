import webpack from 'webpack';
import { webpackConfig, webpackTestConfig, config } from '../config';

const buildConfig = (function(nodeEnv = config.env.DEVELOPMENT) {
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

webpack(buildConfig).run((err, stats) => {
  var jsonStats = stats.toJson();

  if (err) {
    for (let i = 0; i < jsonStats.errors.length; i++) {
      console.log(jsonStats.errors[i]);
    }

    throw err;
  }

  for (let i = 0; i < jsonStats.warnings.length; i++) {
    console.log(jsonStats.warnings[i]);
  }

  console.log('\u001b[32m', 'Completed compilation 🍾', '\u001b[0m', webpackConfig.output.path);
});
