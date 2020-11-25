import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/Forms';
import {ReactiveFormsModule } from'@angular/forms';
import { SeatmapreservationComponent } from './seatmapreservation/seatmapreservation.component';
import {HttpClientModule} from '@angular/common/http';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatMappingService } from './Services/SeatMappingService';

@NgModule({
  declarations: [
    AppComponent,
    SeatmapreservationComponent,
    SeatBookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SeatMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }