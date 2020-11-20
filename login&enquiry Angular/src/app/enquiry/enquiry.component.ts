import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusesService } from '../services/buses.services';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  Source_station:string[];
  Selected=null;
  submitted=false;
constructor(private busservice:BusesService) { }
ngOnInit() {
  
}
getSourcestation(id)
  {
    this.busservice.getBooking(id).subscribe(data=>{this.Source_station = data as string[];
    });
  }
}
