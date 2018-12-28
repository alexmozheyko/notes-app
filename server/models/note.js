var mongoose = require('../libs/mongoose'); 

var Schema = mongoose.Schema;

var noteSchema = new Schema({ 
    title        : String,
    content      : String,
    listItemsIds : Array,
    colorHex: {
        type     : String,
        required : true
    },
    image: String,
    creationTime     : Date,
    modificationTime : Date,
    deletionTime     : Date,
    profileId: {
        type     : String,
        required : true
    },
    labels: Array,
    isArchived: {
        type    : Boolean,
        default : false
    },
    isInTrash: {
        type    : Boolean,
        default : false
    }
}, { versionKey: false });

exports.Note = mongoose.model('Note', noteSchema);