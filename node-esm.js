module.exports = {
  plugins: [ 'node' ],
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    './rules/best-practices.js',
    './rules/esm.js',
    './rules/promises.js',
    './rules/node.js',
    './rules/style.js',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'node/no-unpublished-import': 'error',
  },
};
