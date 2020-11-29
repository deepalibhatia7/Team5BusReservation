import { HttpClient, HttpHeaders } from '@angular/common/http';

import{Injectable} from '@angular/core'
import { NgForm } from '@angular/forms';
import { Employee } from 'src/models/employee.model';
import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class LoginService
{
    constructor(private http:HttpClient,private userrouter:Router )
    {

    }
    readonly uri = "https://localhost:44310/api/Login";
    //https://localhost:44308/api/SeatMapping?Bus_id="+Busid+"&Available_number_of_seats="+Ticketsbooked
     
  //to check user in logged in  or not
  loginsessionvariable;
  loginuser;
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  loginCheck()
  {
      debugger;
      this.loginuser= sessionStorage.getItem('Email');
      if(this.loginuser!="")
      {
          this.loginsessionvariable=true;
      }
      else{
          this.loginsessionvariable=false;
      }
    
  }

    // checking employee  login  creditals from webapi
    empLogin(registration)
    {
        debugger;
    // return  this.http.get("https://localhost:44310/api/Login?Email="+registration.Email+"&Password="+registration.Password);
    return this.http.post(this.uri,registration)
    }
    //log off 
public loginuservariable:boolean;
   public dologoff()
    {
        debugger;
        sessionStorage.clear();
        this.loginuservariable=false;
       this.userrouter.navigate(['/home']);
    }
}