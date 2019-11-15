import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rahul',
  templateUrl: './rahul5.component.html',
  styleUrls: ['./rahul.component.css']
})
export class RahulComponent implements OnInit {

  constructor() { }

  city=[
  {id:1, name:"LDH"},
  {id:2, name:"ASR"},
  {id:3, name:"JLD"},
  ];

  log(v)
  { 
  	console.log(v);
  }

  ngOnInit() {
  }

}
