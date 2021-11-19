module.exports = {
  plugins: [ 'node' ],
  env: {

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
};
