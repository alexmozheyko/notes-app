var async = require('async');

var Color = require('../models/color').Color;

function addColorsToDatabase() {
    async.parallel([
        function (callback) {
            let white = new Color({ 
                name : 'white', 
                hex  : '#ffffff' 
            });
            white.save((err) => callback(err, white));
        },
        function (callback) {
            let green = new Color({ 
                name : 'green', 
                hex  : '#caff9b' 
            });
            green.save((err) => callback(err, green));
        },
        function (callback) {
            let orange = new Color({ 
                name : 'orange', 
                hex  : '#ffce66' 
            });
            orange.save((err) => callback(err, orange));
        },
        function (callback) {
            let red = new Color({ 
                name : 'red', 
                hex  : '#ff9191' 
            });
            red.save((err) => callback(err, red));
        }
    ], (err, results) => {
        if (err)
            console.log(`Error: ${err} `);
        
        console.log('Successfully added colors');
    })
};


addColorsToDatabase();