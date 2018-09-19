'use strict';

const path = require('path');
const browlUtil = require('browl-util');

/**
  * Dotenv decorator allows to copy .env file before create operation starting works
  *
  * @param {Object} strategy
  */
module.exports = (strategy) => {
  const repo = strategy.repo;
  const rootConfig = strategy.rootConfig;
  const repoConfig = strategy.repoConfig;
  const dotenvConfig = repoConfig.dotenv || {};

  const originalCreate = strategy.create.bind(strategy);

  function getSource() {
    const value = dotenvConfig.source || './templates/.env';

    return value.startsWith('/') ?
      value :
      path.join(rootConfig.conf_dir, repo, value);
  }

  strategy.create = (branch, options) => {
    const source = getSource();
    const destination = dotenvConfig.destination || path.join(options.cwd, '.env');

    return browlUtil.copy(source, destination)
      .then(() => {
        return originalCreate(branch, options);
      });
  };

  return strategy;
};
