import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(public afAuth: AuthService) {
  	afAuth.signout()
  }

  ngOnInit() {
  }

}
