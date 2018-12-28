import { AuthGuard } from './_guards/auth.guard';

import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

export const RouteDefinitions = [
    { path: 'register', component: RegistrationComponent },
    { path: 'signin',   component: SigninComponent },
    { path: 'notes',    component: NotesComponent, canActivate: [ AuthGuard ],
        children: [
            { path: 'list', component: NotesListComponent },
            // { path: 'archive', component: ArchiveComponent },
            // { path: 'trash', component: TrashComponent },
            // { path: 'setting', component: SettingsComponent }
        ] 
    },
    { path: '',   redirectTo: 'notes/list', pathMatch: 'full' },
    { path: '**', redirectTo: '',           pathMatch: 'full' },
];