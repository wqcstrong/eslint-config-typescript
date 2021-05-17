const defaultRules = require('./default-rules')
const tsLintRules = require('./tslint');

module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['eslint-comments', 'jest', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    mocha: true,
    jest: true
  },
  rules: {
    ...defaultRules,
    ...tsLintRules
  }
};
