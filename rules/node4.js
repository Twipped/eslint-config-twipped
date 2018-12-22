module.exports = exports = {
	extends: [ './node.js' ],
	rules: {
		// node 4 doesn't support rest or spread
		'prefer-rest-params': 'off',
		'prefer-spread': 'off',
	},
};
