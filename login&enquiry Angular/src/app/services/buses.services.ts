import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {observable} from 'rxjs/Rx';
import {Buses} from '../models/buses';

@Injectable({ providedIn: "root" })
export class BusesService {
    constructor(private http: HttpClient) {

    }
    getBooking(): Observable<Buses[]>
    {
        debugger;
        return this.http.get("https://localhost:44378/api/Buses").map(res=>res);
    }
}