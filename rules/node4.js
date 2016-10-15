module.exports = {
	extends: ['./node.js'],
	rules: {
		"node/no-unsupported-features": ["error", {"version": 4}],

		// node 4 doesn't support rest or spread
		'prefer-rest-params': 'off',
		'prefer-spread': 'off',
	}
};