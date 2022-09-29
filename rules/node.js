module.exports = exports = {
  plugins: [ 'n' ],

  rules: {
    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // warn if something calls process.exit without explicit allow
    'no-process-exit': 'warn',

    // enforces error handling in callbacks (node environment)
    'n/handle-callback-err': 'warn',

    // enforce using `exports` for named exports
    'n/exports-style': [ 'error', 'exports', { 'allowBatchAssign': true } ],

    // disallow the assignment to exports without also assigning to module.exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    'n/no-exports-assign': 'error',

    // ensure correct hashbang path when hashbang is used in executable scripts
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
    'n/shebang': 'error',

    // ensure that if the package defines a bin path, that path is published with the package
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'n/no-unpublished-bin': 'error',

    // ensure avoidance of any apis deprecated in our current node version
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'n/no-deprecated-api': 'warn',

    'n/no-unsupported-features/es-syntax': 'warn',
    'n/no-unsupported-features/es-builtins': 'warn',
    'n/no-unsupported-features/node-builtins': 'warn',

    'n/no-extraneous-import': 'off',
    'n/no-extraneous-require': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-unpublished-import': 'off',
    'n/no-unpublished-require': 'off',
  },
};
