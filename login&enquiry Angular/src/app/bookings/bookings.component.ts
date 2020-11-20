import { Component, OnInit } from '@angular/core';
import{BookingService} from 'src/app/services/booking.services';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingservice: BookingService) { }

  ngOnInit() {
  }
  Destination;

  //calling taxamount from employeeservice
  Booking(id)
  {
    this.bookingservice.getBooking(id).subscribe(data=>{this.Destination=data});
  }
}
