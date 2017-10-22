import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
	person: any={};
	profile: any={};
	editing = false;
	model: any={};

	constructor(private http: HttpClient, public afd: AngularFireDatabase, public auth: AuthService, public router: Router) {
		afd.database.ref(auth.getCurUid()).once("value").then((s) => {
			console.log(s.val());
			this.person = s.val();
			this.profile = this.person.profile;
			this.model.skills = this.person.profile.skills.join(",")
			this.person.profile.skills = this.person.profile.skills.join(" ");
			this.model.name = this.profile.name;
			this.model.email = this.person.email;
			this.model.salary = this.profile.salary;
			this.model.city = this.profile.city;
			this.model.years = this.profile.years;
			this.model.state = this.profile.state;
			this.model.remote = this.profile.remote;
			this.model.relocate = this.profile.relocate;
			this.model.about = this.profile.about;
		})
	}
	edit(){
		this.editing=!this.editing;
	}
	getLatLong(loc){
		return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key=AIzaSyC_1z8WV5mxr-WfR3JM692lmjnKtobxtYY").toPromise().then((data) => {
			// Read the result field from the JSON response.
			data["results"][0].geometry.location.lat+=(Math.random()-0.5)/10;
			data["results"][0].geometry.location.lng+=(Math.random()-0.5)/10;
			return (data["results"][0].geometry.location);
		});
	}
	onSubmit(){
		this.model.skills = this.model.skills.split(",");
		this.getLatLong(this.model.city + ", " + this.model.state).then((location) => {
			this.model.location = location;
			this.afd.database.ref(this.auth.getCurUid()+"/profile").set(this.model).then(() => {
				this.editing = false;
				this.router.navigateByUrl("editprofile");
			})
			.catch((error) => {
				console.error(error);
			});
		})
	}

	ngOnInit() {
	}

}
