const path = require('path');
const { readdirSync } = require('fs');

// Read all the rule entry JS files
const rulesets = readdirSync(path.join(__dirname, '../rules'))
  .map((filename) => [
    path.basename(filename, '.js'),
    require.resolve(path.join(__dirname, '../rules/', filename))
  ]);

module.exports = Object.from(rulesets);
