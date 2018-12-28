var mongoose = require('mongoose');
var config   = require('../configs/db.config');

mongoose.connect(config.mongoose.uri, config.mongoose.options);

module.exports = mongoose;