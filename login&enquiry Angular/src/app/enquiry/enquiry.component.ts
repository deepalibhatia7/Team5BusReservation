
import { Component, OnInit  } from '@angular/core';
import { BusesService} from '../services/buses.services';
import {Buses} from '../models/buses.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

SearchForm:FormGroup;
startdate:any;
enddate: any;
  today = new Date();
  source: string;
  destination: string;
  todayShort = new Date().toISOString().slice(0,10);
  submitted:boolean=false
busess:Buses[]=[];
buses: Buses;

  
constructor(private formbuilder:FormBuilder, private httpService:BusesService,private router:Router) {
  
  
 }
ngOnInit() {

  this.getBusesdata();
  
}
// this.httpService.getSourceStation().subscribe(data=>
//   {this.busess=data;
//   console.log(this.busess);},
//   (error)=>{
//     alert("Failed to fetch data from server.");
//   });

getBusesdata()
  {
    debugger;
    console.log("inside");
    
    this.httpService.getbusdata().subscribe(
      (data:any)=>{this.busess= data;
      console.log(this.busess);},
      (error)=>{alert("Failed to fetch data from server.")
    });
    localStorage.clear();
    this.SearchForm=this.formbuilder.group({
    bustype:['',Validators.required],
    source:['',Validators.required],
    destination:['',Validators.required],
    startdate:['',Validators.required],
    enddate:['']
  });
  this.SearchForm.controls['enddate'].disable();
  }
  DisableReturn()
  {
    this.SearchForm.controls['enddate'].disable();
  }
  EnableReturn()
  {
    this.SearchForm.controls['enddate'].enable();
  }

  onSubmit(form)
  {
    if(form.invalid)
    {
      alert("Please enter all required details");
      return;
    }
    console.log(form.source);
    localStorage.setItem('type',form.source);
    localStorage.setItem('destination',form.destination);
    localStorage.setItem('startdate',form.startdate);
    localStorage.setItem('enddate',form.enddate);
    this.router.navigate(['busSelect']);
  }

}
