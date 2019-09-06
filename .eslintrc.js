module.exports = exports = {
	plugins: [ 'node' ],
	env: {
		node: true,
	},
	"extends": [
		"eslint:recommended",
		"./rules/best-practices.js",
		"./rules/node.js",
		"./rules/style.js"
	],
	"rules": {
		"node/exports-style": "off"
	}
};
