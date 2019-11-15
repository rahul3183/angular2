import { Component, Output, 
EventEmitter} from '@angular/core';

@Component({
  selector: 'output',
  template: `
	<button class='btn' (click)="valueChanged()">Click</button>
  {{Counter}}

              `
})
export class OutputComponent {

  @Output() obj = new EventEmitter();
  Counter = 0;

  valueChanged()
  {
    this.Counter = this.Counter + 1;
    this.obj.emit(this.Counter);
    console.log(this.Counter);

  }
  
}

