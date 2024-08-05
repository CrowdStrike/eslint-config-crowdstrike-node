'use strict';

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
  nodePlugin.configs['flat/recommended-script'],
  ...compat.extends('crowdstrike'),
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
