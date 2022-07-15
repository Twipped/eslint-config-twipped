module.exports = {

  env: {
    es2020: true,
  },

  extends: [
    'eslint:recommended',
    '../rules/imports.js',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    '../rules/react.js',
    '../rules/style.js',
    '../rules/jsdoc.js',
  ],

  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },

  globals: {
    __ENV_PROD__: "readonly",
    __ENV_DEV__: "readonly",
    window: "writable",
    document: "readonly",
    setTimeout: "readonly",
    setInterval: "readonly",
    clearTimeout: "readonly",
    clearInterval: "readonly",
    requestAnimationFrame: "readonly",
    cancelAnimationFrame: "readonly",
    URL: "readonly",
    console: "readonly",
    ResizeObserver: "readonly",
    Intl: "readonly",
    AbortController: "readonly",
    URLSearchParams: "readonly",
    Element: "readonly",
    "process": "readonly",
  },

  rules: {
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-nodejs-modules': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [ 'error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    } ],
  },

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
