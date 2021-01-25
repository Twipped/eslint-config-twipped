module.exports = {
  plugins: [ 'node' ],
  env: {

  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/promises.js',
    './rules/node.js',
    './rules/style.js',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-import': 'error',
  },
};
