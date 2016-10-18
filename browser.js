module.exports = {
	env: {
		node: false,
		browser: true,
	},
	extends: [
		'./rules/best-practices.js',
		'./rules/es6.js',
		'./rules/style.js',
	],
};
