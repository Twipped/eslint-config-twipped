module.exports = {
  plugins: [ 'node' ],

  env: {
    es2020: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    '../rules/imports.js',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/node.js',
    '../rules/style.js',
    '../rules/jsdoc.js',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'script',
  },

  rules: {
    'import/no-commonjs': 'off',
  },
};
