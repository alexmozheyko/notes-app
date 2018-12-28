import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class NotesListService {
    public token: String;
    public currentUser: any;

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private _http: Http) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser && this.currentUser.token;
    }

    readNotes() {
        const url = 'http://localhost:3000/api/readNotes';

        let profileId = JSON.parse(localStorage['currentUser']).id;

        let request = {
            notes: {
                filter: {
                    profileId: profileId
                }
            }
        };

        return this._http.post(url, request, this.options)
            .map((response: Response) => {
                if (response && response.ok && response.json().ok.notes)
                    return response.json().ok.notes;
                else 
                    return false;
            });
    }

    createNote(request: any) {
        const url = 'http://localhost:3000/api/createNote';

        return this._http.post(url, request, this.options)
            .map((response: Response) => {
                if (response && response.ok && response.json().ok.note)
                    return response.json().ok.note;
                else 
                    return false;
            });
    }

    updateNote(request: any) {
        const url = 'http://localhost:3000/api/updateNote';

        return this._http.post(url, request, this.options)
            .map((response: Response) => {
                if (response && response.ok && response.json().ok.note)
                    return response.json().ok.note;
                else 
                    return false;
            });
    }

    deleteNote(request: any) {
        const url = 'http://localhost:3000/api/deleteNote';

        return this._http.post(url, request, this.options)
            .map((response: Response) => {
                if (response && response.ok && response.json().ok.note)
                    return response.json().ok.note;
                else 
                    return false;
            });
    }

    readColors() {
        const url = 'http://localhost:3000/api/readColors';

        return this._http.post(url, {}, this.options)
            .map((response: Response) => {
                if (response && response.ok && response.json().ok.colors)
                    return response.json().ok.colors;
                else 
                    return false;
            });
    }
}