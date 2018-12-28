var express  = require('express');

var validators = require('./colors.validators');
var utils      = require('../../libs/utils');
var Color      = require('../../models/color').Color;

var router = express.Router();

router.post('/readColors', (req, response, next) => {

    let request = req.body ? req.body : {};

    validators.readColors(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        Color.find((err, colors) => {
            if (err)
                return next(err);
            
            response.status(200);
            return response.json({
                ok: {
                    colors: colors
                }
            })
        });
    });
});

module.exports = router;