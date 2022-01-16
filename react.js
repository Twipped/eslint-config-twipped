module.exports = {
  parser: '@babel/eslint-parser',
  plugins: [
    'react',
    'import',
  ],
  "env": {
    "es2020": true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  "globals": {
    "__ENV_PROD__": "readonly",
    "__ENV_DEV__": "readonly",
    "window": "writable",
    "document": "readonly",
    "setTimeout": "readonly",
    "setInterval": "readonly",
    "clearTimeout": "readonly",
    "clearInterval": "readonly",
    "requestAnimationFrame": "readonly",
    "cancelAnimationFrame": "readonly",
    "URL": "readonly",
    "console": "readonly",
    "ResizeObserver": "readonly",
    "Intl": "readonly",
    "AbortController": "readonly",
    "URLSearchParams": "readonly",
    "Element": "readonly",
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    './rules/best-practices.js',
    './rules/esm.js',
    './rules/promises.js',
    './rules/react.js',
    './rules/style.js',
  ],
  rules: {
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'import/no-nodejs-modules': 2,
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  }
};
