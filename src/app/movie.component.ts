import { Component, Input} from '@angular/core';

@Component({
  selector: 'booking',
  template: `
	Movie Name : {{movieName}}
  Price {{price}}

              `
})
export class MovieBooking {

@Input() movieName: string;
@Input() price: number;
  
}

@Component({
  selector: 'confirm',
  template: `
  <booking movieName="Joker"
  price=285></booking>

              `
})

export class App {
  
}
