const jsonFiles = require('eslint-plugin-json-files');
const globals = require('globals');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nodePlugin = require('eslint-plugin-n');

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless using "eslint:recommended"
});

module.exports = [
  ...compat.extends('crowdstrike'),
  nodePlugin.configs['flat/recommended-script'],
  {
    plugins: {
      'json-files': jsonFiles,
    },

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
