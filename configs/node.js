module.exports = {
  plugins: [ 'node' ],
  env: {
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
  rules: {
    'node/no-missing-require': [ 'error', {
      tryExtensions: [ '.js', '.jsx', '.json', '.node', '.mjs' ],
    } ],
  },
};
