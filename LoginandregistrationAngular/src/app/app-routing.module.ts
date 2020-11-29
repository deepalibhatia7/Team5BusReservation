import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';

const routes: Routes = [
  //default 
  {path:'',redirectTo:'/home',pathMatch:'full'},
 
  {path:'home',component:HomeComponent,
  children:[{path:'login',component:EmploginComponent},
  {path:'register',component:RegisterComponent}]},
 /*{path:'login',component:EmploginComponent},*/
 /* {path:'taxcalculator',component:TaxcalculationComponent},*/
/* {path:'empbydept',component:GetempbydeptComponent}, */
  //Adminlayout
  {path:'adminlayout',component:AdminlayoutComponent},
  
 
//userlayout
  {path:'userlayout',component:UserlayoutComponent}
    
  // ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
