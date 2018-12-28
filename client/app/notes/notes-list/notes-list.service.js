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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var NotesListService = /** @class */ (function () {
    function NotesListService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }
    NotesListService.prototype.readNotes = function () {
        var url = 'http://localhost:3000/api/readNotes';
        var profileId = JSON.parse(localStorage['currentUser']).id;
        var request = {
            notes: {
                filter: {
                    profileId: profileId
                }
            }
        };
        return this._http.post(url, request, this.options)
            .map(function (response) {
            if (response && response.ok && response.json().ok.notes)
                return response.json().ok.notes;
            else
                return false;
        });
    };
    NotesListService.prototype.createNote = function (request) {
        var url = 'http://localhost:3000/api/createNote';
        return this._http.post(url, request, this.options)
            .map(function (response) {
            if (response && response.ok && response.json().ok.note)
                return response.json().ok.note;
            else
                return false;
        });
    };
    NotesListService.prototype.updateNote = function (request) {
        var url = 'http://localhost:3000/api/updateNote';
        return this._http.post(url, request, this.options)
            .map(function (response) {
            if (response && response.ok && response.json().ok.note)
                return response.json().ok.note;
            else
                return false;
        });
    };
    NotesListService.prototype.deleteNote = function (request) {
        var url = 'http://localhost:3000/api/deleteNote';
        return this._http.post(url, request, this.options)
            .map(function (response) {
            if (response && response.ok && response.json().ok.note)
                return response.json().ok.note;
            else
                return false;
        });
    };
    NotesListService.prototype.readColors = function () {
        var url = 'http://localhost:3000/api/readColors';
        return this._http.post(url, {}, this.options)
            .map(function (response) {
            if (response && response.ok && response.json().ok.colors)
                return response.json().ok.colors;
            else
                return false;
        });
    };
    NotesListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NotesListService);
    return NotesListService;
}());
exports.NotesListService = NotesListService;
//# sourceMappingURL=notes-list.service.js.map