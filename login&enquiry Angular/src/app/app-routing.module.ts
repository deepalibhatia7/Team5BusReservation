import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{EnquiryComponent} from './enquiry/enquiry.component';
import { BusSelectComponent } from './bus-select/bus-select.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'',component:EnquiryComponent},
  {path:"busSelect", component:BusSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
