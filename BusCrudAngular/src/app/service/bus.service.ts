import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusVM} from '../class/busVM';

@Injectable({
    providedIn:'root'
})
export class BusService
{
    list:BusVM[];
        constructor(private http:HttpClient){
            this.list=[];
        }

    //GET METHOD
    public GetBus()
    {
        debugger;
        return this.http.get("https://localhost:44358/api/Buses");
    }
    //POST METHOD
    public postBus(bus)
    {
        console.log(bus);
        debugger;
        return this.http.post("https://localhost:44358/api/Buses",bus);
    }
    //DELETE METHOD
    public deleteBus(id)
    {
        debugger;
       return this.http.delete("https://localhost:44358/api/Buses?id="+id);
     }

     //PUT METHOD
     public putBus(bus:BusVM)
    {
        debugger;
       return this.http.put("https://localhost:44358/api/Buses/"+bus.Bus_id,bus);
     }

     //PUT BUS METHOD

     public geteditBusbyID(id)
          {
         return this.http.get("https://localhost:44358/api/Buses/"+id);
     }
     public editBus(busess:BusVM)
    {
        debugger;
       return this.http.put("https://localhost:44358/api/Buses/"+busess.Bus_id,busess);
     }
}