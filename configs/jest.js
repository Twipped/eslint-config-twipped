module.exports = {
  overrides: [
    {
      // TEST FILE SPECIFIC USECASES
      files: [
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*{.,_}{test,spec}.{js,mjs,cjs}',
      ],
      extends: '../rules/jest.js',
    },
  ],
};
