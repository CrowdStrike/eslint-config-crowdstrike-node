'use strict';

const crowdstrikeNodeConfig = require('./index.js');

module.exports = [
  ...crowdstrikeNodeConfig,
  {
    ignores: ['!**/.*'],
    files: ['**/*.js', '**/*.json'],
    rules: {
      'json-files/require-engines': 'off',
    },
  }];
