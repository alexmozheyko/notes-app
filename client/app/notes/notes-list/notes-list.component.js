"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var notes_list_service_1 = require("./notes-list.service");
var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(_notesListService) {
        this._notesListService = _notesListService;
        this._profileId = JSON.parse(localStorage['currentUser']).id;
        this.newNote = {
            title: '',
            content: '',
            colorHex: '#ffffff'
        };
        this.preUpdatedNote = Object.assign({}, this.newNote);
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._notesListService.readNotes()
            .subscribe(function (notes) { return _this.notes = notes; });
        this._notesListService.readColors()
            .subscribe(function (colors) { return _this.colors = colors; });
    };
    NotesListComponent.prototype.createNote = function () {
        var _this = this;
        var request = {
            note: {
                title: this.newNote.title,
                content: this.newNote.content,
                colorHex: this.newNote.colorHex,
                profileId: this._profileId
            }
        };
        this._notesListService.createNote(request)
            .subscribe(function (note) {
            _this.notes.unshift(note);
            _this.newNote = {
                title: '',
                content: '',
                colorHex: '#ffffff'
            };
        });
    };
    NotesListComponent.prototype.preUpdateNote = function (note) {
        this.preUpdatedNote = Object.assign({}, note);
    };
    NotesListComponent.prototype.updateNote = function (note, colorHex) {
        var _this = this;
        colorHex = colorHex ? colorHex : note.colorHex;
        var request = {
            note: {
                filter: {
                    _id: note._id
                },
                data: {
                    title: note.title,
                    content: note.content,
                    colorHex: colorHex
                }
            }
        };
        this._notesListService.updateNote(request)
            .subscribe(function (updatedNote) {
            _this.notes.forEach(function (note) {
                if (note._id === updatedNote._id) {
                    note.colorHex = colorHex;
                    note.title = updatedNote.title;
                    note.content = updatedNote.content;
                }
            });
        });
    };
    NotesListComponent.prototype.deleteNote = function (noteId) {
        var _this = this;
        var request = {
            note: {
                filter: {
                    _id: noteId
                }
            }
        };
        this._notesListService.deleteNote(request)
            .subscribe(function (deletedNote) {
            _this.notes.forEach(function (note, index) {
                if (note._id === deletedNote._id)
                    _this.notes.splice(index, 1);
            });
        });
    };
    NotesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './notes-list.component.html',
            styleUrls: ['./notes-list.component.css'],
            providers: [notes_list_service_1.NotesListService]
        }),
        __metadata("design:paramtypes", [notes_list_service_1.NotesListService])
    ], NotesListComponent);
    return NotesListComponent;
}());
exports.NotesListComponent = NotesListComponent;
//# sourceMappingURL=notes-list.component.js.map