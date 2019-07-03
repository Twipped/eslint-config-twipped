module.exports = {
	'extends': [
		'./rules/best-practices.js',
		'./rules/node.js',
		'./rules/es6.js',
		'./rules/promises.js',
		'./rules/react.js',
		'./rules/style.js',
		'./rules/react-native.js',
	],
	rules: {
		'node/no-unsupported-features/es-syntax': 'off',
	},
};
