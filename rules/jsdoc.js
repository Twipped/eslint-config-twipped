module.exports = {

  // https://github.com/gajus/eslint-plugin-jsdoc
  plugins: [
    'jsdoc',
  ],

  settings: {
    jsdoc: {
      mode: 'typescript',
      preferredTypes: {
        object: 'Object',
        'object.<>': 'Object<>',
        'Object.<>': 'Object<>',
        'object<>': 'Object<>',
        symbol: 'Symbol',
      },
    },
  },

  rules: {

    'jsdoc/check-access': 'error', // Recommended
    'jsdoc/check-alignment': 'warn', // Recommended

    'jsdoc/check-indentation': 'off',

    'jsdoc/check-line-alignment': 'off',

    'jsdoc/check-param-names': 'warn', // Recommended

    'jsdoc/check-property-names': 'warn', // Recommended

    'jsdoc/check-syntax': 'error',

    'jsdoc/check-tag-names': [ 'error', { // Recommended
      jsxTags: true,
      definedTags: [
        'category',
        'component',
      ],
    } ],

    'jsdoc/check-types': 'error', // Recommended

    'jsdoc/check-values': 'error', // Recommended

    'jsdoc/empty-tags': 'error', // Recommended

    'jsdoc/implements-on-classes': 'warn', // Recommended

    'jsdoc/match-description': 'off',

    'jsdoc/match-name': 'off',

    'jsdoc/multiline-blocks': [ 'error', { // Recommended
      noZeroLineText: true,
      noSingleLineBlocks: false,
      noMultilineBlocks: false,
    } ],

    'jsdoc/newline-after-description': 'warn', // Recommended

    'jsdoc/no-bad-blocks': 'warn',

    'jsdoc/no-defaults': 'off',

    'jsdoc/no-missing-syntax': 'off',

    'jsdoc/no-multi-asterisks': 'warn', // Recommended

    'jsdoc/no-restricted-syntax': 'off',

    'jsdoc/no-types': 'off',

    'jsdoc/no-undefined-types': [ 'warn', { // Recommended
      definedTypes: [
        'Iterator',
        'Iterable',
        'Ref',
        'Class',
      ],
    } ],

    'jsdoc/require-asterisk-prefix': 'warn',

    'jsdoc/require-description': 'warn',

    'jsdoc/require-description-complete-sentence': 'off',

    'jsdoc/require-example': 'off',

    'jsdoc/require-file-overview': 'off',

    'jsdoc/require-hyphen-before-param-description': 'off',

    // Checks for presence of jsdoc comments, on class declarations as well as functions.
    'jsdoc/require-jsdoc': 'off', // Recommended

    'jsdoc/require-param': 'warn', // Recommended

    'jsdoc/require-param-description': 'off', // Recommended

    'jsdoc/require-param-name': 'warn', // Recommended

    'jsdoc/require-param-type': 'warn', // Recommended

    'jsdoc/require-property': 'off', // Recommended

    'jsdoc/require-property-description': 'off', // Recommended

    'jsdoc/require-property-name': 'warn', // Recommended

    'jsdoc/require-property-type': 'warn', // Recommended

    'jsdoc/require-returns': [ 'warn', { // Recommended
      exemptedBy: [ 'component', 'constructor' ],
    } ],

    'jsdoc/require-returns-check': 'warn', // Recommended

    'jsdoc/require-returns-description': 'off', // Recommended

    'jsdoc/require-returns-type': 'error', // Recommended

    'jsdoc/require-throws': 'off',

    'jsdoc/require-yields': 'warn', // Recommended

    'jsdoc/require-yields-check': 'warn', // Recommended

    'jsdoc/sort-tags': 'off',

    'jsdoc/tag-lines': 'off', // Recommended

    'jsdoc/valid-types': 'warn', // Recommended
  },
};
