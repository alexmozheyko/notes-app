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
var ng2_toasty_1 = require("ng2-toasty");
var ToastService = /** @class */ (function () {
    function ToastService(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.toastyConfig.theme = 'material';
    }
    ToastService.prototype.showErrorToast = function (title, message) {
        var toastOptions = {
            title: title,
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'error'
        };
        this.toastyService.error(toastOptions);
    };
    ToastService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_toasty_1.ToastyService,
            ng2_toasty_1.ToastyConfig])
    ], ToastService);
    return ToastService;
}());
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map