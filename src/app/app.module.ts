import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//import { BankAccount,App } from './api.component';
//import { MovieBooking,App } from './movie.component';
import { OutputComponent } from './outputApi.component';
import { RahulComponent } from './rahul/rahul.component';
import { DatesheetComponent } from './datesheet/datesheet.component';

import { RouterModule } from '@angular/router';
import { GradesComponent } from './grades/grades.component';
import { HttpModule } from '@angular/http';
import { HTTPServiceComponent } from './httpservice.component';






@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    RahulComponent,
    DatesheetComponent,
    GradesComponent,
    HTTPServiceComponent

   

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'grades',
        component: GradesComponent
      },
      {
        path: 'datesheet',
        component: DatesheetComponent
      }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
