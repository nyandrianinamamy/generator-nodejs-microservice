const Generator = require('./../generator.js');

module.exports = class extends Generator {
    constructor(args, opts) {
        const files = ['index.ts'];
        super(args, opts, 'controller', files);
        this.name = this.options.name;
    }

    writing() {
        super.writing();
    }
};
