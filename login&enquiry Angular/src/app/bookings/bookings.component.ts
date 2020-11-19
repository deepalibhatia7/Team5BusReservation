import { Component, OnInit } from '@angular/core';
import {Booking} from 'src/app/models/bookings.model';
import{BookingService} from 'src/app/services/booking.services';
import{NgModel} from '@angular/forms';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingservice: BookingService) { }

  ngOnInit() {
    this.fetchbooking();
  }

  //Get Method
  bookings;
  fetchbooking(){
    this.bookingservice.getBooking().subscribe((data)=>{
      this.bookings=data;
      console.log(data)
    })
  }
  //POST Method
  booking:any={};
  result;
  addbooking(){
    console.log(this.booking);
    this.bookingservice.insertBooking(this.booking).subscribe((data)=>{this.result=data;})
    window.alert("Data Added!!!");
    this.fetchbooking();
  }
  //Delete department
  removebooking(id){
    this.bookingservice.deleteBooking(id).subscribe((data)=>{this.result=data;})
    window.alert("Data Deleted!!!");
  }
  //Fetching particular department details
  getparticularbookings(id)
  {
    //debugger;
    this.bookingservice.getbookingbyid(id).subscribe((data)=>{this.booking=data;})
  }
 
}
