var express  = require('express');

var validators = require('./notes.validators');
var utils      = require('../../libs/utils');
var Note       = require('../../models/note').Note;

var router = express.Router();

router.post('/readNotes', (req, response, next) => {

    let request = req.body;

    validators.readNotes(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };
        
        let dbRequest = {
            profileId    : request.notes.filter.profileId,
            deletionTime : null
        };

        Note.find(dbRequest, (err, notes) => {
            if (err)
                return next(err);
            
            response.status(200);
            return response.json({
                ok: {
                    notes    : notes,
                    numItems : notes ? notes.length : 0
                }
            })
        });
    });
});


router.post('/createNote', (req, response, next) => {

    let request = req.body;   

    validators.createNote(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        request.note.colorHex = request.note.colorHex 
            ? request.note.colorHex 
            : "#ffffff"; 

        let note = new Note(request.note);

        note.creationTime     = utils.getCurrentDatetime();
        note.modificationTime = utils.getCurrentDatetime(); 

        note.save((err) => {
            if (err)
                return next(err);
            
            response.status(200);
            response.json({
                ok: {
                    note: note
                }
            });
        });
    });  
});

router.post('/updateNote', (req, response, next) => {

    let request = req.body;

    validators.updateNote(request, (errorCount, errors) => {

        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        request.note.data.colorHex = request.note.data.colorHex 
            ? request.note.data.colorHex 
            : "#ffffff";

        let rawNote = {};

        for (var k in request.note.data)
            rawNote[k] = request.note.data[k];
        
        rawNote.id               = request.note.filter._id;
        rawNote.modificationTime = utils.getCurrentDatetime(); 

        Note.update({ _id: rawNote.id}, rawNote, (err, result) => {
            if (err)
                return next(err);
            
            Note.findOne({ _id: rawNote.id }, (err, note) => {
                if (err)
                    return next(err);

                response.status(200);
                response.json({
                    ok: {
                        note: note
                    }
                })
            });
        });
    }) 
});

router.post('/deleteNote', (req, response, next) => {

    let request = req.body;

    validators.deleteNote(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        let rawNote = {
            id           : request.note.filter._id,
            deletionTime : utils.getCurrentDatetime()
        };

        Note.update({ _id: rawNote.id }, rawNote, (err, result) => {
            if (err)
                return next(err);
            
            Note.findOne({ _id: rawNote.id }, (err, note) => {
                if (err)
                    return next(err);
                
                response.status(200);
                response.json({
                    ok: {
                        note: note
                    }
                })
            });
        });
    });
});

router.post('/readNote', (req, response, next) => {

    let request = req.body;

    validators.readNote(request, (errorCount, errors) => {
        if (errorCount) {
            response.status(403);
            return response.json({
                errors: errors
            });
        };

        Note.findOne(request.note.filter, (err, note) => {
            if (err)
                return next(err);

            response.status(200);
            return response.json({
                ok: {
                    note: note
                }
            })
        });
    });
});

module.exports = router;