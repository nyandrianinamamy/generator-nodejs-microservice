var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.argument('appName', { type: String, required: true });
        this.appName = this.options.appName;
    }
};
