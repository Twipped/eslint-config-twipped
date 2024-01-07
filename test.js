/* eslint no-console: 0 */
const { ESLint } = require('eslint');
const test = require('node:test');
const assert = require('node:assert');

test('load config in eslint to validate all rule syntax is correct', async () => {
  const eslint = new ESLint();
  const code = 'const foo = 1;\nconst bar = function () {};\nbar(foo);\n';
  const [ lintResult ] = await eslint.lintText(code);
  assert.deepEqual(lintResult.messages.map(({ message }) => message), []);
});
