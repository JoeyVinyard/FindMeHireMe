import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	key: "AIzaSyC_1z8WV5mxr-WfR3JM692lmjnKtobxtYY";
	lat: number = 40.4237;
	lng: number = -86.9212;
	zoom: number = 15;
	pin = ("../../../assets/pin.png");
	people;

	showPerson: any={};
	showProfile: any={};
	imgSrc = "";
	pdfSrc = "";
	defaultSrc = "../../../assets/user.png";
	skillFilter;
	activeSkillFilter;
	relocate = false;
	remote = false;
	maxSalary = 1000000;

	onClick(person){
		this.showPerson = person;
		this.showProfile = person.profile;
		this.showProfile.skills = this.showProfile.skills.join(" ");
		this.firebaseApp.storage().ref(person.uid + "/profilepic").getDownloadURL().then((url)=>{
			this.imgSrc = url;
		});
		this.firebaseApp.storage().ref(person.uid + "/resume").getDownloadURL().then((url)=>{
			this.pdfSrc = url;
		});

	}
	toggleSkill(skill){
		if(this.activeSkillFilter.includes(skill)){
			this.activeSkillFilter.splice(this.activeSkillFilter.indexOf(skill),1);
		}else{
			this.activeSkillFilter.push(skill);
		}		
		this.people.forEach((person) => {
			person.show = true;
			this.activeSkillFilter.forEach((s) =>{
				if(!person.profile.skills.includes((s)))
					person.show = false;
			});
		});
	}
	toggleRelocate(){
		this.relocate = !this.relocate;
		this.people.forEach((person) => {
			if(this.relocate && person.profile.relocate.toLowerCase()=="yes")
				person.show = false;
			else if(!this.relocate && person.profile.relocate.toLowerCase()=="no")
				person.show = false;
			else{
				person.show = true;
			}
		});
	}
	toggleRemote(){
		this.remote = !this.remote;
		this.people.forEach((person) => {
			if(this.remote && person.profile.remote.toLowerCase()=="yes")
				person.show = false;
			else if(!this.remote && person.profile.remote.toLowerCase()=="no")
				person.show = false;
			else{
				person.show = true;
			}
		});
	}

	getUsers(){
		this.afd.database.ref().orderByChild('role').equalTo('forhire').once("value").then((s) => {
			var p = [];
			var skills = [];
			s.forEach((data) => {
				p.push(data.val());
				p[p.length-1].profile.skills.forEach((skill)=>{
					if(!skills.includes(skill))
						skills.push(skill);
				});
				p[p.length-1].uid = data.key;
			});
			this.skillFilter = skills;
			this.people = p;
		});
	}
	changeSalary(){
		this.people.forEach((person) => {
			if(person.profile.salary > this.maxSalary)
				person.show = false;
			else
				person.show = true;
		});
	}

	constructor(public http: HttpClient, public afd: AngularFireDatabase, public firebaseApp: FirebaseApp) {
		this.activeSkillFilter = [];
		this.people = [];
		this.getUsers();
		this.changeSalary();
	}

	ngOnInit() {
	}

}
