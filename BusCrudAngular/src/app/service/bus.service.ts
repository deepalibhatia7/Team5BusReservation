import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BusVM} from '../class/busVM';

@Injectable({
    providedIn:'root'
})
export class BusService
{
    list:BusVM[];
        constructor(private http:HttpClient){this.list=[];}
    public GetBus()
    {
        debugger;
     return this.http.get("https://localhost:44370/api/Buses");
    }
    public postBus(bus)
    {
        return this.http.post("https://localhost:44370/api/Buses",bus);
    }
    // public deleteBus(id)
    // {
    //     return this.http.delete("https://localhost:44370/api/Buses/"+id);
    // }
}