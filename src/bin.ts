#!/usr/bin/env node
import * as path from 'path';
import fileCase from './index';

let argv = process.argv.slice(2);
let directory = __dirname;

if(argv[0]){
    let cwd = process.cwd();
    directory = path.resolve(cwd, argv[0]);
}

console.log(directory);
fileCase(directory);