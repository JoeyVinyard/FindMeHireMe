import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-splash',
	templateUrl: './splash.component.html',
	styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

	errors: any = {}; //This one is public so that angular can access it
	model: any = {};  //Model that angular will store data in
	valid = true;

	validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	validate(){
		this.errors = {};
		if(!this.model.email){
			this.errors.email = "Please provide an email";
		}else if(!this.validateEmail(this.model.email)){
			this.errors.email = "Please enter a valid email";
		}
		if(!this.model.pass){
			this.errors.pass = "Please provide a password";
		}else if(this.model.pass.length<6){
			this.errors.pass = "Password must be at least 6 characters long";
		}
		if(!this.model.confpass){
			this.errors.confpass = "Please confirm your password";
		}else if(this.model.pass != this.model.confpass){
			this.errors.confpass = "Passwords must match";
		};

		return !!Object.keys(this.errors).length;
	}
	print(){
		console.log(this.model);
	}
	onSubmit(){
		console.log(this.model);
		this.valid = this.validate();
		if(this.valid){
			return;
		}
		this.auth.signup(this.model.email, this.model.pass, this.model.role);
	}

	constructor(public auth: AuthService){
		this.model.role = "forhire";
	}

	ngOnInit() {}
}
