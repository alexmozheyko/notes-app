import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
    moduleId    : module.id,
    selector    : 'notes-list',
    templateUrl : './notes.component.html',
    styleUrls   : ['./notes.component.css'],
    providers   : [ AuthService ]
})
export class NotesComponent implements OnInit {
    public user: Object;
    public sideMenuWidth: Number = 0;

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    ngOnInit(): void {
        this.user = JSON.parse(localStorage['currentUser']);
    }

    signOut() {
        this._authService.signOut();
        this._router.navigate(['/signin']);
    }

    formatUserRegistrationDate(userRegistrationDate: string) {
        let date  = new Date(userRegistrationDate);
        let month = date.toLocaleString("en-us", { month: "long" });
        
        let day  = date.toString().split(" ")[2];
        let year = date.toString().split(" ")[3];
        
        return `${month} ${day}, ${year}`;
    }
}