import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import {MustMatch} from'../mustmatch';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false; 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      gender: ['',Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
