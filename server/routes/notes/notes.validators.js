var validator = require('node-validator');

var validators = {};

validators.readNotes = (request, callback) => {

    var check = validator.isObject()
        .withRequired('notes', validator.isObject()
            .withRequired('filter', validator.isObject()
                .withRequired('profileId',    validator.isString())
                .withOptional('deletionTime', validator.isBoolean())
            )
        );
    
    validator.run(check, request, callback);
};

validators.createNote = (request, callback) => {

    var check = validator.isObject()
        .withRequired('note', validator.isObject()
            .withOptional('title', validator.isString({ max: 100 }))
            .withOptional('image', validator.isString())

            // TODO: change to optional, when list items functionality will be created
            .withRequired('content', validator.isString({ max: 2000 }))

            .withOptional('colorHex',  validator.isString())
            .withRequired('profileId', validator.isString())

            .withOptional('labels', validator.isArray(
                validator.isString(), { max: 5 }
            ))
        );
    
    validator.run(check, request, callback);
};

validators.updateNote = (request, callback) => {

    var check = validator.isObject()
        .withRequired('note', validator.isObject()
            .withRequired('filter', validator.isObject()
                .withRequired('_id', validator.isString())
            )

            .withRequired('data', validator.isObject()
                .withOptional('title',     validator.isString({ max: 100 }))
                .withOptional('image',     validator.isString())
                .withOptional('content',   validator.isString({ max: 2000 }))
                .withOptional('colorHex',  validator.isString())

                .withOptional('labels', validator.isArray(
                    validator.isString(), { max: 5 }
                ))
            )
        );
    
    validator.run(check, request, callback);
};

validators.deleteNote = (request, callback) => {

    var check = validator.isObject()
        .withRequired('note', validator.isObject()
            .withRequired('filter', validator.isObject()
                .withRequired('_id', validator.isString())
            )
        );
    
    validator.run(check, request, callback);
};

validators.readNote = (request, callback) => {

    var check = validator.isObject()
        .withRequired('note', validator.isObject()
            .withRequired('filter', validator.isObject()
                .withRequired('_id',       validator.isString())
                .withRequired('profileId', validator.isString())
            )
        );
    
    validator.run(check, request, callback);
};

module.exports = validators;
