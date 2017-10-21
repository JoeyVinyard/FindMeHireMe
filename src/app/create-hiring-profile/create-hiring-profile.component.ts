import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hiring-profile',
  templateUrl: './create-hiring-profile.component.html',
  styleUrls: ['./create-hiring-profile.component.css']
})
export class CreateHiringProfileComponent implements OnInit {
	model: any={};
	errors: any={};

	validate(){
		this.errors = {};
		if(!this.model.name){
			this.errors.name = "Please provide your name.";
		}
		if(!this.model.company){
			this.errors.company = "Please provide your company.";
		}
		if(!this.model.size){
			this.errors.size = "Please provide company size.";
		}
		console.log(this.errors);
		return !!Object.keys(this.errors).length;
	}

	onSubmit(){
		console.log(this.model);
		if(this.validate()){
			console.log("Failed validation");
			return;
		}
		this.afd.database.ref(this.auth.getCurUid()+"/profile").set(this.model).then(() => {
			this.router.navigateByUrl("map");
		})
	}

	constructor(public auth: AuthService, public afd: AngularFireDatabase, public router: Router) {
		this.model.size = "startup";
	}

	ngOnInit() {
	}

}
