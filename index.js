'use strict';

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'crowdstrike',
    'plugin:node/recommended',
  ],
  plugins: [
    'json-files',
  ],
  rules: {
    'json-files/require-engines': 'error',
    'json-files/require-license': 'error',
    'json-files/restrict-ranges': ['error', { pinUnstable: true }],
  },
};
