module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/es6.js',
    './rules/promises.js',
    './rules/style.js',
  ],
};
