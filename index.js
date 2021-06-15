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
    'strict': 'error',

    'node/no-unsupported-features/es-syntax': ['error', {
      'ignores': [
        // remove once https://github.com/mysticatea/eslint-plugin-node/issues/250 is fixed
        'dynamicImport',
      ],
    }],

    'json-files/require-engines': 'error',
    'json-files/require-license': 'error',
    'json-files/restrict-ranges': ['error', { pinUnstable: true }],
  },
};
