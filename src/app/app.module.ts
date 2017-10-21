import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AuthService } from './services/auth.service';

import { routes } from './res/routes';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    CreateprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
