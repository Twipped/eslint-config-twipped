module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native',
    'import',
  ],
  env: {
    'react-native/react-native': true,
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
    'plugin:react-native/recommended',
    'plugin:import/recommended',
    './rules/best-practices.js',
    './rules/esm.js',
    './rules/promises.js',
    './rules/react.js',
    './rules/style.js',
  ],
};
