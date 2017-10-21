import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	title: string = 'My first AGM project';
	lat: number = 40.4237;
	lng: number = -86.9212;
	zoom: number = 15;
	constructor() { }

	ngOnInit() {
	}

}
