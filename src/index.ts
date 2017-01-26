/**
 * TODO:
 *
 * Resources:
 * // https://github.com/jergason/recursive-readdir
 */
import {readDir} from './read-dir'
import {changePathCase} from "./change-path-case";

function fileCase(dirName: string) {
    readDir(dirName, changePathCase, (err)=>{
        console.log('done');
    })
}

export default fileCase;