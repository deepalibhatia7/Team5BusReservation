import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Injectable} from '@angular/core';

@Injectable({providedIn:"root"})

export class  RegistrationService
{
    baseUrl:string ="https://localhost:44310/api/Registrations";
    constructor(private http : HttpClient) { }


    registeruser(userTable)
    {
        return this.http.post(this.baseUrl,userTable)
    }


}