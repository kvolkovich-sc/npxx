'use strict';

const path = require('path');
const fs = require('fs');

const SCRIPTS_DIR = path.resolve(__dirname, '.npxx');
const SCRIPTS_DIR_FILES = fs.readdirSync(SCRIPTS_DIR, { encoding: 'utf-8' });

console.log(SCRIPTS_DIR_FILES);
