import { Component, OnInit } from '@angular/core';
import { SeatMappingService } from '../Services/SeatMappingService';


@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  Seats;
  Bus;
  constructor(private seatservice:SeatMappingService) { }

  ngOnInit() {
  }
  fetchdata(Busid,Ticketsbooked)
  {
    console.log ("enter your busid");
    debugger;
    this.seatservice.getSeat(Busid,
      Ticketsbooked).subscribe(
      (data)=>{this.Seats=data;}
    )
  }

}