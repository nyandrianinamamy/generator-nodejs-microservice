const underscore = require('underscore.string');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts, layer) {
        super(args, opts);
        this.argument('name', { type: String, required: true });
        this.layer = layer;
    }

    writing() {
        const files = ['index.ts', `${this.layer}.ts`];
        const strings = this._stringHelpers(this.options.name);
        const copyOpts = {
            globOptions: {
                ignore: [],
            },
        };
        files.forEach((file) => {
            this.fs.copyTpl(
                this.templatePath(`${this.layer}/${file}`),
                this.destinationPath(
                    file !== 'index.ts'
                        ? `${strings.dash}/${this.layer}/${strings.dash}.${file}`
                        : `${strings.dash}/${this.layer}/${file}`,
                ),
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
