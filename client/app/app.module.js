"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_toasty_1 = require("ng2-toasty");
var auth_guard_1 = require("./_guards/auth.guard");
var app_component_1 = require("./app.component");
var registration_component_1 = require("./registration/registration.component");
var signin_component_1 = require("./signin/signin.component");
var notes_component_1 = require("./notes/notes.component");
var notes_list_component_1 = require("./notes/notes-list/notes-list.component");
var app_routes_1 = require("./app.routes");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.RouteDefinitions),
                ng2_toasty_1.ToastyModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                registration_component_1.RegistrationComponent,
                signin_component_1.SigninComponent,
                notes_component_1.NotesComponent,
                notes_list_component_1.NotesListComponent
            ],
            providers: [
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map