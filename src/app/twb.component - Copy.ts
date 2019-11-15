
import { Component } from '@angular/core';

@Component({
  selector: 'kks',
  template: ` <input [(ngModel)]="section"  (keyup.enter)="show()"/>
              `,
  styleUrls: ['./app.component.css']
})
export class twbComponent {

section ='D1701'
show()
{
	console.log("section :"+this.section);
}



  
}