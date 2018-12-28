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
var ToastyService = (function () {
    function ToastyService(_http) {
        this._http = _http;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    ToastyService.prototype.registerUser = function (data) {
        var url = 'http://localhost:3000/api/registerUser';
        var request = { user: data };
        return this._sendDataToServer(url, request);
    };
    ToastyService.prototype.signIn = function (data) {
        var url = 'http://localhost:3000/api/signInUser';
        var request = { user: data };
        return this._sendDataToServer(url, request);
    };
    ToastyService.prototype.signOut = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    ToastyService.prototype._sendDataToServer = function (url, data) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this._http.post(url, data, options)
            .map(function (response) {
            var id = response.json().ok.user.id;
            var token = response.json().ok.user.token;
            var firstName = response.json().ok.user.firstName;
            var lastName = response.json().ok.user.lastName;
            var email = response.json().ok.user.email;
            var registrationDate = response.json().ok.user.registrationDate;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    registrationDate: registrationDate,
                    token: token
                }));
                return response.json();
            }
            else
                return false;
        });
    };
    return ToastyService;
}());
ToastyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Object])
], ToastyService);
exports.ToastyService = ToastyService;
//# sourceMappingURL=toasty.service.js.map