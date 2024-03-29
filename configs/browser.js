module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/style.js',
  ],
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
