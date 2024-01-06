/* eslint import/no-extraneous-dependencies:0, import/no-dynamic-require:0 */
const fs = require('fs/promises');
const path = require('path');
const { ESLint } = require('eslint');
const sortJson = require('sort-json');
const { glob } = require('glob');

const mixins = [
  'jest',
  'test-node',
  'test-react',
  'jsdoc',
];

const fixturesPath = path.resolve(__dirname, '__fixtures__');

(async () => {
  const fixtures = (await glob('__fixtures__/**', { cwd: __dirname, nodir: true }))
    .map((p) => path.resolve(__dirname, p));

  const items = (await glob('configs/**', { cwd: __dirname, nodir: true }))
    .filter((p) => !mixins.includes(path.basename(p, path.extname(p))))
    .map((p) => path.resolve(__dirname, p));

  for (const cpath of items) {
    const cname = path.basename(cpath, path.extname(cpath));

    const engine = new ESLint({
      baseConfig: {
        extends: [
          `@twipped/eslint-config/${cname}`,
          `@twipped/eslint-config/test-${cname.includes('react') ? 'react' : 'node'}`,
        ],
      },
      useEslintrc: false,
    });

    for (const fpath of fixtures) {
      const fname = path.relative(fixturesPath, fpath).replace(/\//g, '.');
      const opath = path.resolve(__dirname, 'echo', cname, fname);
      await fs.mkdir(path.dirname(opath), { recursive: true });

      const config = await engine.calculateConfigForFile(fpath);
      await fs.writeFile(opath + '.json', JSON.stringify(sort(config), null, 2));
    }
  }
})().catch(console.error); // eslint-disable-line no-console


function sort (input) {
  const result = sortJson(input, {
    ignoreCase: true,
  });

  if (result.parser?.[0] === '/') {
    result.parser = path.relative(__dirname, result.parser);
  }

  return result;
}
