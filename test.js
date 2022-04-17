/* eslint no-console: 0 */
const { ESLint } = require('eslint');
const tap = require('tap');

tap.test('load config in eslint to validate all rule syntax is correct', async (t) => {
  const eslint = new ESLint();
  const code = 'const foo = 1;\nconst bar = function () {};\nbar(foo)\n';
  const [ lintResult ] = await eslint.lintText(code);
  if (!t.equal(lintResult.errorCount, 0)) {
    t.fail(lintResult.messages.map(({ message }) => message));
  }
  t.end();
});

tap.test('ensure we allow top level await', async (t) => {
  const eslint = new ESLint();
  const code = 'const foo = await 1;\nconst bar = function () {};\nawait bar(foo)\n';
  const [ lintResult ] = await eslint.lintText(code);
  if (!t.equal(lintResult.errorCount, 0)) {
    t.fail(lintResult.messages.map(({ message }) => message));
  }
  t.end();
});
