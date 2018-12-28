"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_1 = require("./_guards/auth.guard");
var registration_component_1 = require("./registration/registration.component");
var signin_component_1 = require("./signin/signin.component");
var notes_component_1 = require("./notes/notes.component");
var notes_list_component_1 = require("./notes/notes-list/notes-list.component");
exports.RouteDefinitions = [
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'notes', component: notes_component_1.NotesComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'list', component: notes_list_component_1.NotesListComponent },
        ]
    },
    { path: '', redirectTo: 'notes/list', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
//# sourceMappingURL=app.routes.js.map