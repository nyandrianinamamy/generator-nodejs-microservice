const assert = require('assert');

const stringHelpers = require('./../utils').stringHelpers;

describe('String helpers', function() {
    it('should generate correct case name', function() {
        const corrects = {
            slug: 'correctcase',
            pascal: 'CorrectCase',
            camel: 'correctCase',
            dash: 'correct-case'
        };
        const tests = ['CorrectCase', 'correctCase', 'correct-case'];

        tests.forEach(name =>
            assert(JSON.stringify(corrects) === JSON.stringify(stringHelpers(name)))
        );
    });
});
