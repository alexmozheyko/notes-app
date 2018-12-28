import { Component, OnInit } from '@angular/core';

import { NotesListService } from './notes-list.service';

@Component({
    moduleId    : module.id,
    templateUrl : './notes-list.component.html',
    styleUrls   : ['./notes-list.component.css'],
    providers   : [ NotesListService ] 
})
export class NotesListComponent implements OnInit {
    private _profileId = JSON.parse(localStorage['currentUser']).id;

    public notes  : any;
    public colors : any;

    public newNote = {
        title    : '',
        content  : '',
        colorHex : '#ffffff' 
    }

    public preUpdatedNote = Object.assign({}, this.newNote);

    constructor(private _notesListService: NotesListService) {}
    
    ngOnInit() {
        this._notesListService.readNotes()
            .subscribe((notes: any) => this.notes = notes)
        
        this._notesListService.readColors()
            .subscribe((colors: any) => this.colors = colors);
    }

    createNote() {
        let request = {
            note: {
                title     : this.newNote.title,
                content   : this.newNote.content,
                colorHex  : this.newNote.colorHex,
                profileId : this._profileId
            }
        };

        this._notesListService.createNote(request)
            .subscribe((note: any) => {
                this.notes.unshift(note);

                this.newNote = {
                    title    : '',
                    content  : '',
                    colorHex : '#ffffff'
                }
            });
    }

    preUpdateNote(note: any) {
        this.preUpdatedNote = Object.assign({}, note);
    }

    updateNote(note: any, colorHex: String) {
        colorHex = colorHex ? colorHex : note.colorHex;

        let request = {
            note: {
                filter: {
                    _id: note._id
                },
                data: {
                    title    : note.title,
                    content  : note.content,
                    colorHex : colorHex
                }
            }
        };

        this._notesListService.updateNote(request)
            .subscribe((updatedNote: any) => {
                this.notes.forEach((note: any) => {
                    if (note._id === updatedNote._id) {
                        note.colorHex = colorHex;
                        note.title    = updatedNote.title;
                        note.content  = updatedNote.content;
                    }
                })
            });
    }

    deleteNote(noteId: String) {
        let request = {
            note: {
                filter: {
                    _id: noteId
                }
            }
        };

        this._notesListService.deleteNote(request)
            .subscribe((deletedNote: any) => {
                this.notes.forEach((note: any, index: Number) => {
                    if (note._id === deletedNote._id)
                        this.notes.splice(index, 1);
                })
            });
    }
}