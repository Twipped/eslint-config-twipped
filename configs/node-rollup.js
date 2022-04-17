module.exports = {
  plugins: [ 'node' ],
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/node.js',
    '../rules/style.js',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',

    'node/no-missing-import': [ 'error', {
      tryExtensions: [ '.js', '.jsx', '.json', '.node', '.mjs' ],
    } ],
  },
};
