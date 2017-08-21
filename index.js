'use strict';

const path = require('path');
const fs = require('fs');

let SCRIPTS_DIR = path.resolve(__dirname, '.npxx');
let SCRIPTS_DIR_FILES = fs
    .readdirSync(SCRIPTS_DIR, { encoding: 'utf-8' })
    .filter(file => !/^\..*/.test(file)); // restrict hidden files

console.log(SCRIPTS_DIR_FILES);
