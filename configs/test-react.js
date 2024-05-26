module.exports = {
  overrides: [
    {
      // TEST FILE SPECIFIC USECASES
      files: [
        '**/__tests__/**',
        '**/*{.,_}test.{js,jsx,mjs,cjs,ts,tsx}',
      ],
      extends: [
        '../rules/testing-library.js',
      ],
      rules: {
        'import/no-nodejs-modules': 'off',
        'import/no-extraneous-dependencies': [
          'error', {
            'devDependencies': true,
          },
        ],
      },
    },
  ],
};
