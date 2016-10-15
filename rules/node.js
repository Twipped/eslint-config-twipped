module.exports = {
	plugins: ["node", "cah"],
	extends: ["plugin:node/recommended"],
	env: {
		'node': true
	},
	rules: {
		// enforces error handling in callbacks (node environment)
		'handle-callback-err': 'warn',

		// disallow use of new operator with the require function
		'no-new-require': 'error',

		// disallow string concatenation with __dirname and __filename
		// http://eslint.org/docs/rules/no-path-concat
		'no-path-concat': 'error',

		// warn if something calls process.exit without explicit allow
		'no-process-exit': 'warn',

		// enforce using `exports` for named exports
		"node/exports-style": ["error", "exports", {"allowBatchAssign": true}],

		"node/no-unsupported-features": ["error", {"version": 4}],

		// ensure we aren't using the built in Promise
		"cah/no-undef-promise": "error",
	}
};