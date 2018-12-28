import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    public token: String;

    constructor(private _http: Http) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    registerUser(data: any) {
        const url = 'http://localhost:3000/api/registerUser';

        let request = { user: data };

        return this._sendDataToServer(url, request);
    }

    signIn(data: any) {
        const url = 'http://localhost:3000/api/signInUser';

        let request = { user: data };

        return this._sendDataToServer(url, request);
    }

    signOut(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }

    _sendDataToServer(url: string, data: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(url, data, options)
            .map((response: Response) => { 
                let id               = response.json().ok.user._id;
                let token            = response.json().ok.user.token;
                let firstName        = response.json().ok.user.firstName;
                let lastName         = response.json().ok.user.lastName;
                let email            = response.json().ok.user.email;
                let registrationDate = response.json().ok.user.registrationDate;

                if (token) {
                    this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ 
                        id               : id, 
                        firstName        : firstName,
                        lastName         : lastName,
                        email            : email,
                        registrationDate : registrationDate,
                        token            : token
                    }));

                    return response.json();
                } else
                    return false;
            });
    }
}