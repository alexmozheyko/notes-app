import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ToastyModule } from 'ng2-toasty';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SigninComponent } from './signin/signin.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

import { RouteDefinitions } from './app.routes';



@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(RouteDefinitions),
      ToastyModule.forRoot()
  ],
  declarations: [ 
      AppComponent,
      RegistrationComponent,
      SigninComponent,
      NotesComponent,
      NotesListComponent
  ],
  providers: [
      AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
