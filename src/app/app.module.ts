import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import {HttpClientModule} from '@angular/common/http';

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
import { SigninComponent } from './signin/signin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavbarComponent,
    CreateprofileComponent,
    CreateHiringProfileComponent,
    SignoutComponent,
    ProfilesuccessComponent,
    MapComponent,
    SigninComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_1z8WV5mxr-WfR3JM692lmjnKtobxtYY'
    }),
    HttpClientModule
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
