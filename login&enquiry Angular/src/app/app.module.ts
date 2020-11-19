import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BusesComponent } from './buses/buses.component';
import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnquiryComponent,
    BusesComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }