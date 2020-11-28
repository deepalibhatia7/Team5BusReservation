import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {LoginService} from '../services/loginService';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
user:User;
 username;
  securityquestion;
  changepasswords;
  result1;

  constructor(private loginService:LoginService) { 
    this.changepasswords=[];
    this.user=new User();
  }
  verifying(){
    //  console.log(this.user.SecurityQuestion);
    this.loginService.getChangePassword(this.user).subscribe((data)=>{
      console.log(this.user);
      //console.log(data);
      this.result1="Enter new password";
      //this.user=new User();
  })
      // this.result1="Incorrect Username or security answer";
      // this.user.SecurityQuestion=null;
    }
    forgotPassword(){
    //console.log(this.user); 
    this.loginService.putUser(this.user.UID,this.user).subscribe(
      success=>alert("done"),
      error=>alert(error));
    }
  ngOnInit(): void {
  }

}

