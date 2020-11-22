import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminServices } from './services/adminservices';
import { BusCrudComponent } from './bus-crud/bus-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminLoginComponent,
    BusCrudComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
