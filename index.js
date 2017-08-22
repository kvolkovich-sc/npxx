'use strict';

const path = require('path');
const fs = require('fs');
// const npx = require('npx');

let splitRegExp = /(^#.*$)*\n.*\n/gm;

let scriptsDir = path.resolve(__dirname, '.npxx');
let scriptsDirFiles = fs
    .readdirSync(scriptsDir, { encoding: 'utf-8' })
    .filter(file => !/^\..*/.test(file))
    .map(file => path.resolve(scriptsDir, `./${file}`)); // restrict hidden files

let filesContent = scriptsDirFiles.reduce((content, filePath) => {
  let fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return content + fileContent;
}, '');

function parseFilesContent(filesContent) {
  let contentParts = filesContent.split(splitRegExp);
  console.log(JSON.stringify(contentParts, null, 4));
}


parseFilesContent(filesContent);
