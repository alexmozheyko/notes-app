var express  = require('express');

var validators = require('./auth.validators');
var utils      = require('../../libs/utils');
var User       = require('../../models/user').User;

var router  = express.Router();

router.post('/registerUser', (req, response, next) => {
    
    let request = req.body;

    validators.registerUser(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        if (request.user.password !== request.user.confirmation) {
            response.status(403);
            return response.json({
                errors: 'Password confirmation should match password'
            });
        };

        delete request.user.confirmation;
        let user = new User(request.user);

        user.save((err) => {
            if (err)
                return next(err);

            let userToSend = {
                _id              : user._id,
                firstName        : user.firstName,
                lastName         : user.lastName,
                email            : user.email,
                registrationDate : user.registrationDate,
                token            : user.generateJwt()
            };

            response.status(200);
            response.json({ 
                ok: {
                    user: userToSend
                }
            })
        });
    });
});

router.post('/signInUser', (req, response, next) => {

    let request = req.body;

    validators.signInUser(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };
        
        let email    = request.user.email;
        let password = request.user.password;

        User.findOne( { email: email }, (err, user) => {
            if (err)
                return next(err);

            if (!user) {
                response.status(401);
                return response.json({ 
                    errors: {
                        message: 'User not found!'
                    }
                });
            };

            if (!user.validPassword(password, user)) {
                response.status(403);
                return response.json({ 
                    errors: {
                        message: 'Password is wrong!'
                    }
                });
            };
            
            let userToSend = {
                _id              : user._id,
                firstName        : user.firstName,
                lastName         : user.lastName,
                email            : user.email,
                registrationDate : user.registrationDate,
                token            : user.generateJwt()
            };

            response.status(200);
            return response.json({ 
                ok: {
                    user: userToSend
                } 
            });
        })
    });
});


module.exports = router;