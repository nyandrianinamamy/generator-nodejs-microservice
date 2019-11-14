const Generator = require('../generator.js');

module.exports = class extends Generator {
    constructor(args, opts) {
        const files = ['index.ts', 'mongoose.schema.ts'];
        super(args, opts, 'entity', files);
        this.name = this.options.name;
    }

    initializing() {}

    writing() {
        super.writing();
    }
};
