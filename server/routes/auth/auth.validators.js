var validator = require('node-validator');

var validators = {};

validators.registerUser = (request, callback) => {

    var check = validator.isObject()
        .withRequired('user', validator.isObject()
            .withRequired('firstName',    validator.isString({ max: 50 }))
            .withRequired('lastName',     validator.isString({ max: 100 }))
            .withRequired('email',        validator.isString({ max: 100, regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ }))
            .withRequired('password',     validator.isString({ min: 5 }))
            .withRequired('confirmation', validator.isString({ min: 5 }))
        );
    
    validator.run(check, request, callback);
};

validators.signInUser = (request, callback) => {

    var check = validator.isObject()
        .withRequired('user', validator.isObject()
            .withRequired('email',      validator.isString({ max: 100, regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ }))
            .withRequired('password',   validator.isString({ min: 5 }))
        );

    validator.run(check, request, callback);
};

module.exports = validators;