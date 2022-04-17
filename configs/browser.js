module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/style.js',
  ],
};
