import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToastService {

    constructor(
        private toastyService:ToastyService, 
        private toastyConfig: ToastyConfig
    ) {
        this.toastyConfig.theme = 'material';
    }

    showErrorToast(title: any, message: any) {
        
        var toastOptions:ToastOptions = {
            title: title,
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'error'
        };

        this.toastyService.error(toastOptions);
    } 
}