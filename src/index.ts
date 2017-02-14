/**
 * TODO:
 *
 * Resources:
 * // https://github.com/jergason/recursive-readdir
 */
import { readDirAndUpdateCasing } from './read-dir'
import { changePathCase } from './change-path-case';

function fileCase(dirName: string, convertToCase = 'snake') {
    readDirAndUpdateCasing(dirName, (file: string) => {
        return changePathCase(file, convertToCase)
    })
}

export default fileCase;