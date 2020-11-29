import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import {MustMatch} from'../mustmatch';
import {NgForm} from '@angular/forms';
import {RegisterModel} from 'src/app/Model/registermodel';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pwdpattern="^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,15}$";
  registerForm: FormGroup;
  submitted = false; 
  newuser:RegisterModel;
  result:any=[];
  RegistrationService: any;
  constructor(private formBuilder:FormBuilder) { }


  onSubmit(userform:NgForm)
  {
    console.log(userform.value)
    this.RegistrationService.registeruser(this.newuser).subscribe((data)=>{this.result.data;})
    alert ('Successfully Submitted!');
    
  }

  ngOnInit(): void {
    {
      this.newuser ={
        First_Name: "",
        User_Name: "",
        Email: "",
        Password: "",
        Age:null,
        Gender: "",
        Phone_Number:null,
      },
      {validator: MustMatch('password', 'confirmPassword')}
    }
  }

}