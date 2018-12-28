var mongoose = require('../libs/mongoose'); 

var Schema = mongoose.Schema;

var colorSchema = new Schema({ 
    name: {
        type     : String,
        required : true
    },
    hex: {
        type     : String,
        required : true
    }
}, { versionKey: false });

exports.Color = mongoose.model('Color', colorSchema);