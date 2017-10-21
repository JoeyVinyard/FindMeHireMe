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
		if(!this.model.name){
			this.errors.name = "Please provide your name.";
		}
		if(!this.model.company){
			this.errors.company = "Please provide your company.";
		}
		if(!this.model.companysize){
			this.errors.companysize = "Please provide company size.";
		}
		return !!Object.keys(this.errors).length;
	}

	onSubmit(){
		if(this.validate())
			return;
		this.afd.database.ref(this.auth.getCurUid()+"/profile").set(this.model).then(() => {
			this.router.navigateByUrl("map");
		})
	}

	constructor(public auth: AuthService, public afd: AngularFireDatabase, public router: Router) { }

	ngOnInit() {
	}

}
