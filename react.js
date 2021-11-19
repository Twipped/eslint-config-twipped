module.exports = {
  plugins: [
    'react',
  ],
  "env": {
    "es2020": true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
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
  "settings": {
    "react": {
      "version": "detect",
    },
  },
};
