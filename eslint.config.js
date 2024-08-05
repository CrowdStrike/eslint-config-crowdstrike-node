'use strict';
const crowdstrikeNodeConfig = require('./index.js');

module.exports = [
  ...crowdstrikeNodeConfig,
  {
    ignores: ['!**/.*'],
    files: ['**/*.json'],
    rules: {
      'json-files/require-engines': 'off',
    },
  }];
