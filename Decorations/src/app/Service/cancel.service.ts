import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core'
import { Router } from '@angular/router';

@Injectable({providedIn:"root"})
export class CancelService
{
    constructor(private http:HttpClient,private userrouter:Router )
    {

    }
    readonly uri = "https://localhost:44374/api/TicketDetails?Registration_Id=401";
     
    TicketCancel(emp:any)
    {
    return  this.http.post(this.uri,emp);
    }
   
}
