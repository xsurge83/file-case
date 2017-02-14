import * as path from 'path';

export interface FileChangeOptions {
    baseDirectory: string
}

export const changePathCase = (file: string, convertToCase = 'snake', options?: FileChangeOptions): string => {
    let result: string = file;
    if (file) {
        if (options) {
            if (options.baseDirectory) {
                file = file.replace(options.baseDirectory, '');
            }
        }

        const caseConverter = caseConverters[convertToCase];

        result = file
            .split('/')
            .map((val) => caseConverter(val).toLowerCase())
            .join('/');

        if (options) {
            if (options.baseDirectory) {
                result = path.join(options.baseDirectory, result);
            }
        }
    }
    return result;
};

const caseConverters = {
  'snake' : (path: string) => path.replace(/([a-z])([A-Z])/g, '$1-$2')
} as any;
