import { Component, OnInit } from '@angular/core';
import{BusVM} from '../class/busVM';
import{BusService}from '../service/bus.service';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  bus:BusVM;
  buses;
  result;

  constructor(private busService:BusService) { }
  
  ngOnInit() {
    this.fetchdata();
   this.insertBus();

    
  }
  fetchdata()
  {
    console.log("hai");
   this.busService.GetBus().subscribe((data)=>{this.buses=data;})
  }
  insertBus()
  {
    this.busService.postBus(this.bus).subscribe((data)=>{this.result=data;})
  }
  // del;
  // deleteBus(id)
  // {
  //   this.busService.deleteBus(id).subscribe((data)=>{this.del=data;})
  // }
}