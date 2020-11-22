import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
adminform:FormGroup;
isvalid:boolean=false;
  constructor(private router:Router) {
    this.adminform=new FormGroup({
      mailid:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    });
   }

    //Below get methods helps us to fetch mailid and password from login form
  get mailid()
  {
    return this.adminform.get('mailid')
  }

  get password()
  {
    return this.adminform.get('password')
  }
 err;
   doadmin()
   {
     console.log("hai");
  
    if(this.mailid.value=="busreservationteam2020@gmail.com" && this.password.value=="Admin@12345")
    {
        console.log("Welcome");
        this.isvalid=true;
        
       
       //  localStorage.setItem('email',this.mailid.value)
      // sessionStorage.setItem('email',this.mailid.value)
    }
       else
       {
         this.err="Invalid username or password!!";

       }
   }
  ngOnInit() {
    // this.isvalid=false;
  }

}