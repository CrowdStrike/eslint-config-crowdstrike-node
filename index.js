'use strict';

const crowdstrikeConfig = require('eslint-config-crowdstrike');
const globals = require('globals');
const jsonFiles = require('eslint-plugin-json-files');
const nodePlugin = require('eslint-plugin-n');

module.exports = [
  nodePlugin.configs['flat/recommended-script'],
  ...crowdstrikeConfig,
  {
    files: ['**/*.json'],
    plugins: {
      'json-files': jsonFiles,
    },
    processor: 'json-files/json',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      strict: 'error',
      'json-files/require-engines': 'error',
      'json-files/require-license': 'error',

      'json-files/restrict-ranges': ['error', {
        pinUnstable: true,
      }],
    },
  }];
