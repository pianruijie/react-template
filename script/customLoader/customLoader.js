const loadUtils = require('loader-utils');

module.exports = function(source) {
    const options = loadUtils.getOptions(this) || {};
    console.log(source);
    console.log(options);
    return source;
};