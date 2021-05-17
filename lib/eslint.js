/**
 * @desc just for check js
 */
const defaultRules = require('./default-rules')

module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  plugins: ['eslint-comments', 'jest', 'import'],
  parser: "@babel/eslint-parser",
  parserOptions: {
    // Babel config file in the root directory such as `babel.config.js` is required,
    // since will not parse any experimental syntax when no configuration file is found.
    requireConfigFile: true,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
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
    ...defaultRules
  }
}
