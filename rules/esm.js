module.exports = {
  rules: {
    // enforces no braces where they can be omitted
    'arrow-body-style': [ 'error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    } ],

    // require parens in arrow function arguments
    'arrow-parens': [ 'error', 'always' ],

    // require space before/after arrow function's arrow
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [ 'error', { before: true, after: true } ],


    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [ 'error', { before: false, after: true } ],

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [ 'error', {
      allowParens: true,
    } ],

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': [ 'error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    } ],

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [ 'error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    } ],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': [ 'warn', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    } ],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [ 'warn', {
      destructuring: 'all',
    } ],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // use rest parameters instead of arguments
    'prefer-rest-params': 'warn',

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'warn',

    // enforce spacing between object rest-spread
    'rest-spread-spacing': [ 'error', 'never' ],

    // require a Symbol description
    'symbol-description': 'error',

    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': [ 'error', 'after' ],

  },
};
