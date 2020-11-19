import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{EnquiryComponent} from './enquiry/enquiry.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:EnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
