module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'react-native',
    'import',
  ],
  env: {

  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/react.js',
    '../rules/style.js',
  ],
};
