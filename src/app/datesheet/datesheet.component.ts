import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesheet',
  templateUrl: './datesheet.component.html',
  styleUrls: ['./datesheet.component.css']
})
export class DatesheetComponent implements OnInit {

	datesheet = [
		{'course':'CAP917','date':'12 Nov'},
		{'course':'CAP918','date':'14 Nov'},
		{'course':'CAP919','date':'16 Nov'},

	]

  constructor() { }

  ngOnInit() {
  }

}
