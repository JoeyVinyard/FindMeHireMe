import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	af;
	authState;
	uid;

	signup(email, password, role){
		console.log(email,password,role);
		this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((user) => {
			this.afd.database.ref(user.uid).set({
				email: email,
				role: role
			}).then(() => {
				if(role == 'forhire')
					this.router.navigateByUrl("createprofile");
				else
					this.router.navigateByUrl("createhiringprofile");
			})
		})
		.catch((error) => {
			console.error(error);
		});
	}
	signin(email, password){
		this.afAuth.auth.signInWithEmailAndPassword(email,password).then((user)=>{
			//Get user role, then send them to correct page
		})
		.catch((error) => {
			console.error(error);
		})
	}
	signout(){
		this.afAuth.auth.signOut().then(() => {
			this.router.navigateByUrl("");
		});
	}
	getCurUid(){
		return this.uid;
	}
	getAuthState(){
		return this.authState;
	}

	constructor(public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public router: Router){
		this.afAuth.authState.subscribe((authState) => {
			this.authState = authState;
		})
		this.afAuth.auth.onAuthStateChanged((authData) => {
			if(!!authData)
				this.uid=authData.uid;
			else
				this.uid=null;
		})
	}
	
}
