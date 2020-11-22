import { HttpClient } from '@angular/common/http';
import{Injectable} from '@angular/core';
import{Busmodel} from '../admin/model/Bus.model';

@Injectable({providedIn:"root"})
export class Busservices
{
    formdata:Busmodel; 
    list:Busmodel[];
    constructor(private http:HttpClient)
        {
            this.list=[];
        }
        getBus()
        {
            return this.http.get("https://localhost:44313/api/Buses");
         
        }
        postBus(bus)
        {
            return this.http.post("https://localhost:44313/api/Buses",bus);
         
        }
        deleteBus(id)
        {
            return this.http.delete("https://localhost:44313/api/Buses"+id);
         
        }
}
