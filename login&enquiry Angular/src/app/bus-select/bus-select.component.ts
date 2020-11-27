import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import { Buses } from '../models/buses.model';
import { BusesService } from '../services/buses.services';
import {OrderPipe} from 'ngx-order-pipe';

@Component({
  selector: 'app-bus-select',
  templateUrl: './bus-select.component.html',
  styleUrls: ['./bus-select.component.css']
})
export class BusSelectComponent implements OnInit {
  source;
  destination;
  startdate;
  enddate;
  buses:Buses[]=[];
  returnBuses=[];
  selected:boolean=false;
  returnSelected:boolean=false;
  busSelected:Buses=null;
  returnbusSelected:Buses;
  order:string='Duration';
  order2:string='Duration';
  reverse2:boolean=false;
  reverse:boolean=false;
  sortedBuses:any[];
  sortedBusesReturn:any[];



  constructor(private busservice:BusesService,public router:Router,private orderPipe:OrderPipe)
   {
     this.sortedBuses=orderPipe.transform(this.buses,'');
     console.log(this.sortedBuses);
     this.sortedBusesReturn=orderPipe.transform(this.returnBuses,'');
     console.log(this.sortedBusesReturn);

    }
    isReturn:boolean;


  ngOnInit(): void {
    sessionStorage.removeItem('flight');
    sessionStorage.removeItem('returnflight');
    this.source=localStorage.getItem('source');
    this.destination=localStorage.getItem('destination');
    this.startdate=localStorage.getItem('startdate');
    this.enddate=localStorage.getItem('enddate');
    this.isReturn=localStorage.getItem("bustype")=="roundtrip"?true:false;
    this.busservice.searchBusList(this.destination,this.source,this.startdate).subscribe((data:any)=>
      {this.returnBuses=data;
      console.log(this.returnBuses);},(error)=>
      {alert("Failed to fetch data from server");
    });
    if(this.isReturn)
    {
      this.busservice.searchBusList(this.destination,this.source,this.startdate).subscribe((data:any)=>
        {this.returnBuses=data;
        console.log(this.returnBuses);},
        (error)=>{alert("Failed to fetch data from server");
      });
    }
  }

  selectReturnBus(returnBus:Buses)
  {
    this.returnSelected=true;
    this.returnbusSelected= returnBus;
    sessionStorage.setItem('returnBus',JSON.stringify(returnBus))

  }
  selectBus(bus:Buses)
  {
    this.selected=true;
    this.busSelected=bus;
    sessionStorage.setItem('bus',JSON.stringify(bus));

  }
  continue()
  {
    console.log("Hey");
  }
  setOrder(value:string)
  {
    if(this.order===value)
    {
      this.reverse=!this.reverse;

    }
    this.order=value;
  }
  setOrder2(value:string)
  {
    if(this.order === value)
    {
      this.reverse = !this.reverse;
    }
    this.order2 = value;
  }

}
