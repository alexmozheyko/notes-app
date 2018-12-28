var validator = require('node-validator');

var validators = {};

validators.readColors = (request, callback) => {

    var check = validator.isObject();

    validator.run(check, request, callback);
};

module.exports = validators;