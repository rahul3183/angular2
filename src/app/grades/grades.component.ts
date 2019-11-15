import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {


grades = [
		{'course':'CAP917','grades':'A'},
		{'course':'CAP918','grades':'A'},
		{'course':'CAP919','grades':'B'},

	]


  constructor() { }

  ngOnInit() {
  }

}
