module.exports = {

  env: {
    es2020: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    '../rules/imports.js',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/node.js',
    '../rules/style.js',
    '../rules/jsdoc.js',
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
