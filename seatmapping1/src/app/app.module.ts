import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SeatmapreservationComponent } from './seatmapreservation/seatmapreservation.component';

@NgModule({
  declarations: [
    AppComponent,
    
   
    SeatmapreservationComponent
  ],
  imports: [
    BrowserModule,
     NgbModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
