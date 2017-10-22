import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	model: any={};
	errors: any={};

	validate(){
		if(!this.model.email)
			this.errors.email="Please enter your email.";
		if(!this.model.pass)
			this.errors.pass="Please enter your password."
		return !!Object.keys(this.errors).length;
	}

	onSubmit(){
		if(this.validate())
			return;
		// console.log("Valid");
		this.auth.signin(this.model.email,this.model.pass).then((s)=>{
			if(s=="hiring")
				this.router.navigateByUrl("map");
			else{
				this.afd.database.ref(this.auth.getCurUid()+"/profile").once("value").then((s)=>{
					this.router.navigateByUrl("editprofile");
				}).catch((error)=>{
					if(error)
						this.router.navigateByUrl("createprofile");
				})
			}
		})
	}	

	constructor(public auth: AuthService, public afd: AngularFireDatabase, public router: Router) { }

	ngOnInit() {
	}

}
