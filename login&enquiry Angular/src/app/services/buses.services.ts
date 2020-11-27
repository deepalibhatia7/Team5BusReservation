import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Buses} from '../models/buses.model';

@Injectable({ providedIn: "root" })
export class BusesService {
    formdata:Buses;
    list:Buses[];
    constructor(private http: HttpClient) {
        this.list=[];

    }
    public getbusdata()
    {
        
        return this.http.get("https://localhost:44378/api/Buses");
    }
    public searchBusList(Source_station,Destination,startdate)
    {
        return this.http.get("https://localhost:44378/api/Enquiry?Source_station="+Source_station+"&Destination="+Destination+"&startdate="+startdate);
    }
}