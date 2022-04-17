module.exports = exports = {
  plugins: [ 'node' ],

  extends: [
    'plugin:node/recommended',
  ],

  rules: {
    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // enforces error handling in callbacks (node environment)
    'node/handle-callback-err': 'warn',

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // warn if something calls process.exit without explicit allow
    'no-process-exit': 'warn',

    // enforce using `exports` for named exports
    'node/exports-style': [ 'error', 'exports', { 'allowBatchAssign': true } ],

    // disallow the assignment to exports without also assigning to module.exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    'node/no-exports-assign': 'error',

    // ensure correct hashbang path when hashbang is used in executable scripts
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'node/shebang': 'error',

    // ensure that if the package defines a bin path, that path is published with the package
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'node/no-unpublished-bin': 'error',

    // ensure avoidance of any apis deprecated in our current node version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 'warn',

    'node/no-unsupported-features/es-syntax': 'warn',
    'node/no-unsupported-features/es-builtins': 'warn',
    'node/no-unsupported-features/node-builtins': 'warn',

    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
  },
};
