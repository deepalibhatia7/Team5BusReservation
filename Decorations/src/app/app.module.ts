import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';
import { LoginService } from './Service/login.service';
import { FAQComponent } from './faq/faq.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    AboutusComponent,
    TermsComponent,
    AdminlayoutComponent,
    UserlayoutComponent,
    FAQComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
