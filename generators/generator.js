const underscore = require('underscore.string');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts, layer, files) {
        super(args, opts);
        this.argument('name', { type: String, required: true });
        this.layer = layer;
        this.files = files || [];
        this.files.push(`${this.layer}.ts`);
    }

    writing() {
        const strings = this._stringHelpers(this.options.name);
        const copyOpts = {
            globOptions: {
                ignore: [],
            },
        };
        this.files.forEach((file) => {
            let destinationPath = '';
            // add base app name
            if (this.options.appName) {
                destinationPath = `${this.options.appName}/`;
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
                copyOpts,
            );
        });
    }

    _stringHelpers(str) {
        return {
            slug: underscore.slugify(str),
            pascal: underscore.classify(str),
            camel: underscore.camelize(str),
            dash: underscore(str)
                .decapitalize()
                .dasherize()
                .value(),
        };
    }
};
