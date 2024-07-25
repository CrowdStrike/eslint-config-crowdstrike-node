'use strict';

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'crowdstrike',
    'plugin:n/recommended',
  ],
  plugins: [
    'json-files',
  ],
  rules: {
    'strict': 'error',
    'json-files/require-engines': 'error',
    'json-files/require-license': 'error',
    'json-files/restrict-ranges': ['error', { pinUnstable: true }],
  },
};
