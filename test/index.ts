// import * as assert from 'assert';
// import * as path from 'path';
// import {readDir} from "../src/read-dir";
// import {changePathCase} from "../src/change-path-case";
//
//
// const testPath = path.join(__dirname, 'directory', 'dirA');
// let result;
//
// readDir(testPath, (err:any, files:string[])=> {
//     assert.equal(files.length> 0, true);
// });
//
// result = changePathCase('/dirA/fileA.ts');
// assert.equal(result, '/dir-a/file-a.ts');
//
// result = changePathCase('root/baseDirectory/dirA/fileA.ts', {baseDirectory:'root/baseDirectory'});
// assert.equal(result, 'root/baseDirectory/dir-a/file-a.ts');
//
