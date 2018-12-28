import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
    moduleId    : module.id,
    templateUrl : './registration.component.html',
    styleUrls   : ['./registration.component.css'],
    providers   : [ AuthService ]
})
export class RegistrationComponent implements OnInit {

    constructor(
        private _router: Router,
        private _authService: AuthService
    ) {}

    onSubmit(formData: any) {
       this._authService.registerUser(formData.value)
            .subscribe((response: any) => {
                if (response && response.ok && response.ok.user) {
                    this._router.navigate(['/notes/list']);
                }
            });
    }

    ngOnInit(): void {}
}
