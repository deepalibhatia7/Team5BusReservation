import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform:FormGroup;
  submitted = false;
  constructor(private formBuiilder:FormBuilder) { }
  ngOnInit() {
    this.Loginform = this.formBuiilder.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(8)]],
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
