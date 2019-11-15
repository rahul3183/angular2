import { Component } from '@angular/core';

@Component({
  selector: 'rev',
  template: `
	Type <input [(ngModel)]="Type"  (keyup.enter)="show()"/>
	<br><br>
    City <input [(ngModel)]="City"  (keyup.enter)="show()"/>
   <br><br>
   Capacity <input [(ngModel)]="Capacity"  (keyup.enter)="show()"/>
   <br><br>
   Duration <input [(ngModel)]="Duration"  (keyup.enter)="show()"/>
   <br><br>
   <button class="btn btn-primary" (click)="show()">Submit</button>
<br><br>
<h3> If statement </h3>
<div *ngIf="arr.length > 0">
Array has {{arr.length}} values. </div>

<div *ngIf="arr.length ==0">
array is empty</div>

<br><br>
<h3> SwitchCase statement </h3>

<div [ngSwitch]="section">
<div *ngSwitchCase="'D1501'"> Fourth Year</div>
<div *ngSwitchCase="'D1701'"> Fifth Year</div>

<br><br>
<h3> Button ngClass statement </h3>
<button [class.btn-primary]=true [class.btn]=true [class.active]="isActive">Click</button>
<br><br>
<button [ngClass]="
{
  'btn':true,
  'btn-primary':true,
  'active':isActive,
  'state':isNotActive
}
">Button</button>

<br><br>

<button [ngStyle]="
{
  'backgroundColor':blcolor,
  'color':clr,
  'fontWeight':wght

}
">Button</button>

              `,
  styleUrls: ['./app.component.css']
})
export class reserveComponent {

arr=[1,2,3,4,5,6];


blcolor ="red";
clr="white";
wght="bold";

section="D1701";

Type =''
City =''
Capacity =''
Duration = ''
show()
{
	console.log("section :"+this.Type);
	console.log("section :"+this.City);
	console.log("section :"+this.Capacity);
	console.log("section :"+this.Duration);
}



  
}