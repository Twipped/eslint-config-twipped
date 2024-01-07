const extensions = [ '.mjs', '.js', '.jsx', '.cjs', '.json', '.ts', '.tsx', '.d.ts' ];

module.exports = {
  extends: [
    'eslint:recommended',
    '../rules/imports.js',
    '../rules/best-practices.js',
    '../rules/esm.js',
    '../rules/promises.js',
    'plugin:n/recommended-module',
    '../rules/node.js',
    '../rules/style.js',
    '../rules/jsdoc.js',
    '../rules/typescript.js',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es2024: true,
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.d.ts' ],
    },

    'import/resolver': {
      node: {
        extensions,
      },
      'enhanced-resolve': {
        extensions,
        conditionNames: [ 'import', 'require', 'node' ],
      },
    },

    'import/extensions': extensions,

    // Resolve type definition packages
    'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  },

  rules: {},
};
