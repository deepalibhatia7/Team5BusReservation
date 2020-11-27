import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import {MustMatch} from'../mustmatch';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  pwdpattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$";
  registerForm: FormGroup;
  submitted = false; 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      gender: ['',Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.pwdpattern)]],
      confirmPassword: ['', Validators.required]
    },
    {validator: MustMatch('password', 'confirmPassword')}
    );
  }
  get f() {return this.registerForm.controls;}

  onSubmit()
  {
    this.submitted=true;
    if(this.registerForm.invalid)
    {
      return;
    }
  }

}
