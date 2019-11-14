const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    async prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'feature',
                message: 'Enter feature name: ',
            },
        ];
        const { feature } = await this.prompt(prompts);

        this.composeWith(require.resolve('../entity'), {
            arguments: [feature],
        });
        this.composeWith(require.resolve('../repository'), {
            arguments: [feature],
        });
        this.composeWith(require.resolve('../services'), {
            arguments: [feature],
        });
        this.composeWith(require.resolve('../controller'), {
            arguments: [feature],
        });
        this.composeWith(require.resolve('../routes'), {
            arguments: [feature],
        });
    }
};
