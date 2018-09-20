'use strict';

const fs = require('fs');
const fsMock = require('mock-fs');
const NullStrategy = require('browl-null');
const dotEnvPlugin = require('../');

describe('browl-plugin-dotenv', () => {
  let repo;
  let rootConfig;
  let repoConfig;

  let strategy;
  let options;

  beforeEach(() => {

    repo = 'webapp';
    rootConfig = {
      conf_dir: '/etc/browl'
    };
    repoConfig = {
      baz: 'quux'
    };

    strategy = new NullStrategy(repo, rootConfig, repoConfig);

    options = {
      cwd: '/var/www/webapp/develop'
    };

    fsMock({
      '/etc/browl/webapp/templates/': {
        '.env': 'VALUE=foo'
      },
      '/path/to/some/dir/': {
        'custom': 'VALUE=bar'
      }
    });
  });

  afterEach(() => {
    fsMock.restore();
  });

  describe('#create', () => {
    it('defaults', (done) => {
      const expected = 'VALUE=foo';

      dotEnvPlugin(strategy);

      strategy.create('develop', options).then(() => {
        const actual = fs.readFileSync('/var/www/webapp/develop/.env').toString();

        expect(actual).equal(expected);

        done();
      }).catch(done);
    });

    it('dotenv.source', (done) => {
      const expected = 'VALUE=bar';

      repoConfig.dotenv = {
        source: '/path/to/some/dir/custom'
      };

      dotEnvPlugin(strategy);

      strategy.create('develop', options).then(() => {
        const actual = fs.readFileSync('/var/www/webapp/develop/.env').toString();

        expect(actual).equal(expected);

        done();
      }).catch(done);
    });

    it('dotenv.destination', (done) => {
      const expected = 'VALUE=foo';

      repoConfig.dotenv = {
        destination: '/var/www/webapp/develop/foo/bar/.env'
      };

      dotEnvPlugin(strategy);

      strategy.create('develop', options).then(() => {
        const actual = fs.readFileSync('/var/www/webapp/develop/foo/bar/.env').toString();

        expect(actual).equal(expected);

        done();
      }).catch(done);
    });
  });
});
