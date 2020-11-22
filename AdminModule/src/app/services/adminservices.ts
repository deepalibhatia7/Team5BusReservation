import { HttpClient } from '@angular/common/http';

import{Injectable} from '@angular/core'

@Injectable({providedIn:"root"})
export class AdminServices
{
    constructor(private http:HttpClient)
        {

        }
        getAdmin()
        {
            return this.http.get("https://localhost:44313/api/Admin");
         
        }
        postAdmin(admin)
        {
            return this.http.post("https://localhost:44313/api/Admin",admin);
         
        }
        deleteAdmin(Username)
        {
            return this.http.delete("https://localhost:44313/api/Admin"+Username);
         
        }
}

