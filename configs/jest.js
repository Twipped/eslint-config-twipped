module.exports = {
  overrides: [
    {
      // TEST FILE SPECIFIC USECASES
      files: [
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/*{.,_}test.{js,jsx,mjs,cjs,ts,tsx}',
      ],
      extends: [
        '../rules/jest.js',
        '../rules/testing-library.js',
      ],
    },
  ],
};
