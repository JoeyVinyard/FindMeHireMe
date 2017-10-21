import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { routes } from './res/routes';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { CreateHiringProfileComponent } from './create-hiring-profile/create-hiring-profile.component';
import { SignoutComponent } from './signout/signout.component';

import 'firebase/storage';
import { ProfilesuccessComponent } from './profilesuccess/profilesuccess.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    CreateprofileComponent,
    CreateHiringProfileComponent,
    SignoutComponent,
    ProfilesuccessComponent,
    MapComponent
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
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
