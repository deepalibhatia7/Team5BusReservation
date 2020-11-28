import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  Register(model) {
    return this.http.post('https://localhost:44333/api/registers/', model);
  }
  Login(model) {return this.http.get('https://localhost:44333/api/registers?email=' + model.email + '&password=' + model.password);
  }
  ForgotPassword(email){
    return this.http.get('https://localhost:44333/api/OTP/VerifyEmail?email=' + email);
  }
  ChangePassword(model){
    return this.http.post('https://localhost:44333/api/OTP/ChangePassword', model);
  }
}