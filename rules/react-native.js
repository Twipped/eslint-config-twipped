module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'react-native',
	],
	env: {
		'react-native/react-native': true,
	},
	rules: {
		'indent': [ 2, 2, {
			'MemberExpression': 1,
		} ],

		'react/jsx-indent': [ 'error', 2 ],

		'react/jsx-indent-props': [ 'error', 2 ],

		'react/jsx-filename-extension': 0,
	},
};
