import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from 'src/Services/employeeService';

import{FormsModule} from '@angular/forms';
import { EmploginComponent } from './emplogin/emplogin.component'
import { LoginService } from 'src/Services/loginService';
import { HomeComponent } from './home/home.component';


import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationService } from 'src/Services/registerService';

@NgModule({
  declarations: [
    AppComponent,
    EmploginComponent,
    HomeComponent,
    AdminlayoutComponent,
    UserlayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [EmployeeService,LoginService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
