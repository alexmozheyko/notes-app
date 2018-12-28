import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { ToastService } from '../shared/toast.service';

@Component({
    moduleId    : module.id,
    templateUrl : './signin.component.html',
    styleUrls   : ['./signin.component.css'],
    providers   : [ AuthService, ToastService ]
})
export class SigninComponent implements OnInit {

    constructor(
        private _router: Router,
        private _authService: AuthService,
        private _toastService: ToastService
    ) {}

    onSubmit(formData: any) {
       this._authService.signIn(formData.value)
            .subscribe((response: any) => {
                this._toastService.showErrorToast('hello', 'world');
                if (response && response.ok && response.ok.user) {
                    this._router.navigate(['/notes/list']);
                } 
            });
    }

    ngOnInit(): void {}
}