/* eslint import/no-extraneous-dependencies:0, import/no-dynamic-require:0 */
const fs = require('fs/promises');
const path = require('path');
const { ESLint } = require('eslint');
const sortJson = require('sort-json');

const extensions = [
  '.js',
  '.mjs',
  '.cjs',
  '.jsx',
  '.json',
];

(async () => {
  const fixtures = (await fs.readdir(path.resolve(__dirname, '__fixtures__')))
    .filter((p) => extensions.includes(path.extname(p)))
    .map((p) => path.resolve(__dirname, '__fixtures__', p));

  const items = (await fs.readdir(path.resolve(__dirname, 'configs')))
    .filter((p) => extensions.includes(path.extname(p)))
    .map((p) => path.resolve(__dirname, 'configs', p));

  for (const cpath of items) {
    const cname = path.basename(cpath, path.extname(cpath));
    const baseConfig = require(cpath);
    const engine = new ESLint({ baseConfig, cwd: path.resolve(__dirname, 'configs') });

    for (const fixture of fixtures) {
      const fname = path.basename(fixture, path.extname(fixture));
      const opath = path.resolve(__dirname, 'echo', cname, fname + '.json');
      await fs.mkdir(path.dirname(opath), { recursive: true });

      const config = await engine.calculateConfigForFile(opath);
      await fs.writeFile(opath, JSON.stringify(sort(config), null, 2));
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
