const Generator = require('yeoman-generator');
const stringHelpers = require('./utils').stringHelpers;

module.exports = class extends Generator {
    constructor(args, opts, layer, files) {
        super(args, opts);
        this.argument('name', { type: String, required: true });
        this.layer = layer;
        this.files = files || [];
        this.files.push(`${this.layer}.ts`);
    }

    writing() {
        const strings = stringHelpers(this.options.name);
        const copyOpts = {
            globOptions: {
                ignore: []
            }
        };
        this.files.forEach(file => {
            let destinationPath = '';
            // add base app name
            if (this.options.appName) {
                destinationPath = `${this.options.appName}/`;
            } else if (this.config.get('baseDir')) {
                destinationPath = `${this.config.get('baseDir')}/`;
            }
            // file name and directory tree
            destinationPath +=
                file !== 'index.ts'
                    ? `${strings.dash}/${this.layer}/${strings.dash}.${file}`
                    : `${strings.dash}/${this.layer}/${file}`;
            this.fs.copyTpl(
                this.templatePath(`${this.layer}/${file}`),
                this.destinationPath(destinationPath),
                strings,
                copyOpts
            );
        });
    }
};
