import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BookingService} from './services/booking.services';
import {BusesService} from './services/buses.services';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BusesComponent } from './buses/buses.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnquiryComponent,
    BusesComponent,
    BookingsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [BookingService,BusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }