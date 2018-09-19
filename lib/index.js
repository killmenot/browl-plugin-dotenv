'use strict';

const path = require('path');
const browlUtil = require('browl-util');
const debug = require('debug')('browl-plugin-dotenv');

/**
  * Dotenv decorator allows to copy .env file before create operation starting works
  *
  * @param {Object} strategy
  */
module.exports = (strategy) => {
  debug('init');

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
    debug('create: %s', branch);

    const source = getSource();
    const destination = dotenvConfig.destination || path.join(options.cwd, '.env');

    debug('source: %s', source);
    debug('destination: %s', destination);

    return browlUtil.copy(source, destination)
      .then(() => {
        return originalCreate(branch, options);
      });
  };

  return strategy;
};
