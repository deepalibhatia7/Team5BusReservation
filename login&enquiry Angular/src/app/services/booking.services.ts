import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class BookingService {
    constructor(private http: HttpClient) {

    }
    getBooking(id)
    {
        return this.http.get("https://localhost:44378/api/Buses");
    }
}