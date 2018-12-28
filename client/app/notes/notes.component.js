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
var NotesComponent = /** @class */ (function () {
    function NotesComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.sideMenuWidth = 0;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage['currentUser']);
    };
    NotesComponent.prototype.signOut = function () {
        this._authService.signOut();
        this._router.navigate(['/signin']);
    };
    NotesComponent.prototype.formatUserRegistrationDate = function (userRegistrationDate) {
        var date = new Date(userRegistrationDate);
        var month = date.toLocaleString("en-us", { month: "long" });
        var day = date.toString().split(" ")[2];
        var year = date.toString().split(" ")[3];
        return month + " " + day + ", " + year;
    };
    NotesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notes-list',
            templateUrl: './notes.component.html',
            styleUrls: ['./notes.component.css'],
            providers: [auth_service_1.AuthService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], NotesComponent);
    return NotesComponent;
}());
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map