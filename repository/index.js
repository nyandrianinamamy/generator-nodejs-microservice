const Generator = require('./../generator.js');

module.exports = class extends Generator {
    constructor(args, opts) {
        const files = ['index.ts'];
        super(args, opts, 'repository', files);
        this.name = this.options.name;
    }

    initializing() {}

    writing() {
        super.writing();
    }
};
