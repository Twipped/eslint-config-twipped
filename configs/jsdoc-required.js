module.exports = {
  extends: [
    '../rules/jsdoc',
  ].map(require.resolve),

  rules: {
    'jsdoc/require-jsdoc': 'warn',
  },

  overrides: [
    {
      // TEST FILE SPECIFIC USECASES
      files: [
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        '**/*{.,_}{test,spec}.{js,jsx,mjs,cjs,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
      ],
      extends: [
        '../rules/jsdoc',
      ].map(require.resolve),
      rules: {
        'jsdoc/require-jsdoc': 'off',
      },
    },
  ],

};
