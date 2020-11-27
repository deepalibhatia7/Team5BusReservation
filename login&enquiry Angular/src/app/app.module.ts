import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BusesService} from './services/buses.services';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BusesComponent } from './buses/buses.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminComponent } from './admin/admin.component';
import { BusSelectComponent } from './bus-select/bus-select.component';
import { SearchPipe } from './BusSearch.pipe';
import {OrderModule, OrderPipe } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EnquiryComponent,
    BusesComponent,
    BookingsComponent,
    AdminComponent,
    BusSelectComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    OrderModule
    
  ],
  providers: [BusesService,OrderPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }