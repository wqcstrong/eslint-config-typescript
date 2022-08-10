const defaultRules = require('./default-rules');
const tsLintRules = require('./tslint');

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
    mocha: true,
    jest: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', '*.config.[jt]s'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['eslint-comments', 'jest', 'import'],
  rules: {
    ...defaultRules,
    ...tsLintRules
  }
};
