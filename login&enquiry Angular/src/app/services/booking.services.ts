import { HttpClient } from '@angular/common/http';
import{Booking} from 'src/app/models/bookings.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class BookingService {
    constructor(private http: HttpClient) {

    }

    readonly uri = "https://localhost:44378/api/Bookings/";
    getBooking() {
        return this.http.get(this.uri);
    }

    insertBooking(booking) {
        return this.http.post(this.uri, booking);
    }

    // to pass id as url parameter
    deleteBooking(id) {
        return this.http.delete(this.uri + id);
    }
    //Update
    //Put
    public putBooking(booking: Booking) {
        return this.http.put(this.uri + booking.Booking_id, booking)

    }

    // To perform edit operation we need to fetch the particular data first

    //get by id 
public getbookingbyid(id)
{
    //debugger;
    return this.http.get(this.uri+id);
}
//updating the particular record
public updateDept(booking:Booking)
{
    return this.http.put(this.uri+booking.Booking_id,booking)

}
}