let path = require('path');
let execSync = require('child_process').execSync;

let scripts = {
  "npm-build": `
    rimraf lib &&
    cross-env NODE_ENV=production webpack --config ./config/webpack.config.js --hide-modules
  `
};

let command = scripts[process.argv[2]].split('\n').map(str => str.trim()).join(' ');

execSync(`npx -c "${command}"`, { stdio: 'inherit' });
