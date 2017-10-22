import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthService } from '../services/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-createprofile',
	templateUrl: './createprofile.component.html',
	styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
	image = "../../assets/user.png";
	valid = true;
	model: any={};
	errors: any={};
	partOneDone = false;
	fileChange(event) {
		var files = event.target.files;
		if(files.length > 0) {
			var file = files[0];
			const storageRef = this.firebaseApp.storage().ref(this.auth.getCurUid()+"/profilepic").put(file).catch((error)=>{
				console.error(error);
			})
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener("load", () => {
				this.image = reader.result;
			}, false);
		}
	}
	resumeChange(event) {
		var files = event.target.files;
		if(files.length > 0) {
			var file = files[0];
			const storageRef = this.firebaseApp.storage().ref(this.auth.getCurUid()+"/resume").put(file).catch((error)=>{
				console.error(error);
			});
		}
	}

	validate(){
		this.errors = {};
		if(!this.model.name){
			this.errors.name = "Please enter your name.";
		}
		if(!this.model.salary){
			this.errors.salary = "Please enter your desired salary.";
		}
		if(!this.model.years){
			this.errors.years = "Please enter your years of experience.";
		}
		if(!this.model.relocate){
			this.errors.relocate = "This question is required."
		}
		if(!this.model.remote){
			this.errors.remote = "This question is required."
		}
		if(!this.model.size){
			this.errors.size = "This question is required."
		}
		if(this.image == "../../assets/user.png"){
			this.errors.image = "Please upload a profile picture."
		}

		return !!Object.keys(this.errors).length;
	}
	validateSecondHalf(){
		this.errors = {};
		console.log(this.model);
		if(!this.model.city){
			this.errors.city = "Please enter your city.";
		}
		if(!this.model.state){
			this.errors.state = "Please enter your state.";
		}
	}

	continue(){
		if(this.validate()){
			return;
		}
		this.partOneDone = true;
	}
	onSubmit(){
		if(this.validateSecondHalf()){
			return;
		}
		this.model.skills = this.model.skills.split(",");
		this.getLatLong(this.model.city + ", " + this.model.state).then((location) => {
			this.model.location = location;
			this.afd.database.ref(this.auth.getCurUid()+"/profile").set(this.model).then(() => {
				this.router.navigateByUrl("editprofile");
			})
			.catch((error) => {
				console.error(error);
			});
		})	
	}

	getLatLong(loc){
		return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key=AIzaSyC_1z8WV5mxr-WfR3JM692lmjnKtobxtYY").toPromise().then((data) => {
			// Read the result field from the JSON response.
			data["results"][0].geometry.location.lat+=(Math.random()-0.5)/10;
			data["results"][0].geometry.location.lng+=(Math.random()-0.5)/10;
			return (data["results"][0].geometry.location);
		});
	}

	constructor(public auth: AuthService, public afd: AngularFireDatabase, public firebaseApp: FirebaseApp, public router: Router, private http: HttpClient) {
		this.model.size = "startup";
	}

	ngOnInit() {
	}

}
