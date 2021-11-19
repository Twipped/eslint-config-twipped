module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-native',
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
    './rules/best-practices.js',
    './rules/esm.js',
    './rules/promises.js',
    './rules/react.js',
    './rules/style.js',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
