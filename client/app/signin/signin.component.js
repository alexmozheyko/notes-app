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
var router_1 = require("@angular/router");
var auth_service_1 = require("../shared/auth.service");
var toast_service_1 = require("../shared/toast.service");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(_router, _authService, _toastService) {
        this._router = _router;
        this._authService = _authService;
        this._toastService = _toastService;
    }
    SigninComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this._authService.signIn(formData.value)
            .subscribe(function (response) {
            _this._toastService.showErrorToast('hello', 'world');
            if (response && response.ok && response.ok.user) {
                _this._router.navigate(['/notes/list']);
            }
        });
    };
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css'],
            providers: [auth_service_1.AuthService, toast_service_1.ToastService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            toast_service_1.ToastService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map