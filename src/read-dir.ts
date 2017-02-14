import * as fs from 'fs';
import * as path from 'path'


export const readDirAndUpdateCasing = (dirPath: string,
                                       changePathCase: (filePath: string) => string,
                                       callback?: (error: any, result?: string[]) => void) => {
    let list: string[] = [];
    fs.readdir(dirPath, (err, files) => {
        if (err && callback) {
            return callback(err);
        }
        let pending = files.length;
        if (!pending && callback) {
            // we are done
            return callback(null, list)
        }
        files.forEach((file) => {
            let filePath = path.join(dirPath, file);
            const newPath = path.join(dirPath, changePathCase(file));
            fs.stat(filePath, (_err, stats) => {
                if (stats.isDirectory()) {
                    fs.rename(filePath, newPath, (err) => {
                        readDirAndUpdateCasing(newPath, changePathCase,  (err, result: string[]) => {
                            list = list.concat(result);
                            if (!--pending && callback) {
                                callback(null, list);
                            }
                        });
                    });
                } else {
                    list.push(filePath);
                    fs.rename(filePath, newPath, (err)=>{
                        if (!--pending && callback) {
                            callback(null, list);
                        }
                    });
                }
            })
        })
    })
}