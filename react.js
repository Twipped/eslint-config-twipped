module.exports = {
	plugins: [
		'react',
	],
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
		'./rules/es6.js',
		'./rules/promises.js',
		'./rules/react.js',
		'./rules/style.js',
	],
	rules: {
		'node/no-unsupported-features/es-syntax': 'off',
	},
};
