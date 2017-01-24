import * as path from 'path';

export interface FileChangeOptions {
    baseDirectory: string
}

export const changePathCase = (file: string, options?: FileChangeOptions): string => {
    let result: string = file;
    if (file) {
        if (options) {
            if (options.baseDirectory) {
                file = file.replace(options.baseDirectory, '');
            }
        }
        result = file
            .split('/')
            .map((val) => val.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())
            .join('/');

        if (options) {
            if (options.baseDirectory) {
                result = path.join(options.baseDirectory, result);
            }
        }
    }
    return result;
};
