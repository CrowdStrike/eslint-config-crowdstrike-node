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

    'n/no-unsupported-features/es-syntax': ['error', {
      'ignores': [
        // remove once we upgrade to v17
        // https://github.com/eslint-community/eslint-plugin-n/issues/80
        'dynamicImport',
      ],
    }],

    'json-files/require-engines': 'error',
    'json-files/require-license': 'error',
    'json-files/restrict-ranges': ['error', { pinUnstable: true }],
  },
};
