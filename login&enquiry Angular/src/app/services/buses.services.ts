import { HttpClient } from '@angular/common/http';
import{Buses} from 'src/app/models/buses.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class BusesService {
    constructor(private http: HttpClient) {

    }

    readonly uri = "https://localhost:44378/api/Buses";
    getBus() {
        return this.http.get(this.uri);
    }

    insertBus(buses) {
        return this.http.post(this.uri, buses);
    }

    // to pass id as url parameter
    deleteBooking(id) {
        return this.http.delete(this.uri + id);
    }
    //Update
    //Put
    public putBooking(Bus: Buses) {
        return this.http.put(this.uri + Bus.Bus_id, Buses)

    }

    // To perform edit operation we need to fetch the particular data first

    //get by id 
public getbusbyid(id)
{
    //debugger;
    return this.http.get(this.uri+id);
}
//updating the particular record
public updateDept(Bus:Buses)
{
    return this.http.put(this.uri+Bus.Bus_id,Buses)

}
}