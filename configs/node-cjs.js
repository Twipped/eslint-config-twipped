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
    'plugin:n/recommended-script',
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

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [ 'error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    } ],
  },

  overrides: [
    {
      files: '*.mjs',
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: '*.cjs',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
