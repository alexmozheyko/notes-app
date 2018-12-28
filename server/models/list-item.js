var mongoose = require('../libs/mongoose'); 

var Schema = mongoose.Schema;

var listItemSchema = new Schema({ 
    content      : {
        type     : String,
        required : true
    },
    isFulfilled: {
        type    : Boolean,
        default : false
    }
}, { versionKey: false });

exports.ListItem = mongoose.model('ListItem', listItemSchema);