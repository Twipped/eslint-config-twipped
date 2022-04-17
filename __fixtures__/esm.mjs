import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const require = createRequire(filename);

// Read all the rule entry JS files
const rulesets = (await readdir(path.join(dirname, '../rules')))
  .map((f) => [
    path.basename(f, '.js'),
    require.resolve(path.join(dirname, '../rules/', f))
  ]);

export default Object.from(rulesets);
