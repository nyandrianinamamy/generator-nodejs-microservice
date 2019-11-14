const underscore = require('underscore.string');

const stringHelpers = function(str) {
    return {
        slug: underscore.slugify(str).replace('-', ''),
        pascal: underscore.classify(str),
        camel: underscore(str)
            .decapitalize()
            .camelize()
            .value(),
        dash: underscore(str)
            .decapitalize()
            .dasherize()
            .value()
    };
};

module.exports.stringHelpers = stringHelpers;
