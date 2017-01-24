/**
 * TODO:
 *
 * Resources:
 * // https://github.com/jergason/recursive-readdir
 */
import * as fs from 'fs';
import {readDir} from './read-dir'
import {changePathCase} from "./change-path-case";

function fileCase(dirName: string) {
    readDir(dirName, changePathCase, (err)=>{
        console.log('done');
    })
}

export = fileCase;