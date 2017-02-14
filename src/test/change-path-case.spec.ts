import chai = require('chai');
import { changePathCase } from "../change-path-case";

describe('changePathCase', () => {
    describe('snake case', () => {
        it('should change file case', () => {
            chai.assert.equal(changePathCase('AdamApple.ts'), 'adam-apple.ts');
        });

        it('should change directory and file', () => {
            chai.assert.equal(changePathCase('largeSt/AdamApple.ts'), 'large-st/adam-apple.ts');
        });
    });
});