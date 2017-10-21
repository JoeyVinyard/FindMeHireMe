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
		console.log(role);
		this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((val) => {
			this.afd.database.ref(this.getCurUid()).set({
				email: email,
				role: role
			}).then(() => {
				this.router.navigateByUrl("createprofile");
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
	getCurUid(){
		return this.uid;
	}

	constructor(public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public router: Router){
		console.log(afd);
		this.afAuth.auth.onAuthStateChanged((authData) => {
			this.uid=authData.uid;
		})
	}
	
}
