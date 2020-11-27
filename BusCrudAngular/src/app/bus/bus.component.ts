import { Component, OnInit } from '@angular/core';
import{BusVM} from '../class/busVM';
import{BusService}from '../service/bus.service';
import {NgForm} from'@angular/forms';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  
  
  result;
  bus=[];

  constructor(private busService:BusService) { }
  
  ngOnInit() {
    this.fetchdata();
    
    
  }
  //GET BUS DATA FROM DATABASE
  fetchdata()
  {
    console.log("hai");
   this.busService.GetBus().subscribe((data:any)=>{this.bus=data;})
  }
  //POST DATA INTO BUS TABLE IN DATABASE
  buses:any={};
  insertBus()
  {
    debugger;
    console.log(this.buses);
    this.busService.postBus(this.buses).subscribe((data)=>{this.result=data;console.log(this.result);
    window.alert("Bus added successfully");})
  }
  //DELTE BUS DATA FROM DATABASE
  del;
  deleteBusbyID(id)
  {
    debugger;
    
  this.busService.deleteBus(id).subscribe((data)=>{this.del=data;console.log(this.del);
  window.alert("Bus details deleted successfully");
  this.fetchdata();})
  }
  //UPDATE BUS TABLE
  
  editBusbyID(id)
  {
    debugger;
    this.busService.geteditBusbyID(id).subscribe((data)=>{this.buses=data;})
  }
  updateBusbyID(buses:BusVM)
  {
    debugger;
    console.log(buses);
    this.busService.editBus(buses).subscribe((data)=>{this.result=data;})
    window.alert("Bus Record Updated!!!");
  }
}