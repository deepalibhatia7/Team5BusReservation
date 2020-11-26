import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SMmodel} from '../Model/SeatMappingModel';

@Injectable({providedIn:"root"})

export class SeatMappingService
{
    list:SMmodel[];
    constructor(private http:HttpClient)
    {
        this.list=[];
    }
    public getSeat(Busid,Ticketsbooked)
    {
        debugger;
        return this.http.get("https://localhost:44308/api/SeatMapping?Bus_id="+Busid+"&Available_number_of_seats="+Ticketsbooked);
    }
}