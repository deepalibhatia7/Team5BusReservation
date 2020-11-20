import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pwdPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8s,15}$";
  Loginform:FormGroup;
  submitted = false;
  constructor(private formBuiilder:FormBuilder) { }
  ngOnInit() {
    this.Loginform = this.formBuiilder.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required,Validators.pattern(this.pwdPattern)]],
   },);
  }
  get f(){return this.Loginform.controls;}
  onSubmit(){
    this.submitted = true;

    if(this.Loginform.invalid)
    {
      return;
    }
  }
}
