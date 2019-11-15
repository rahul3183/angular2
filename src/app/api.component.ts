import { Component, Input} from '@angular/core';

@Component({
  selector: 'bank-acc',
  template: `
	Bank Name : {{bankName}}
  Account No. {{id}}

              `
})
export class BankAccount {

@Input() bankName: string;
@Input('account-id') id:string;
  
}

@Component({
  selector: 'app',
  template: `
  <bank-acc bankName="SBI"
  account-id="2558654"></bank-acc>

              `
})

export class App {
  
}
