import { Component, OnInit } from '@angular/core';
import{Busmodel} from '../admin/model/Bus.model';
import{Busservices} from '../services/buscrudservices';

@Component({
  selector: 'app-bus-crud',
  templateUrl: './bus-crud.component.html',
  styleUrls: ['./bus-crud.component.css']
})
export class BusCrudComponent implements OnInit {
  bus:Busmodel;
  buses;
  result;
  busdetails:any=[];
  constructor(private busservices:Busservices) { }

  ngOnInit(): void {
    this.fetchdata();
    this.insertdata();
    
  }
fetchdata()
{
  console.log("inside method");
  this.busdetails=this.busservices.getBus().subscribe((data)=>{this.buses=data;})
}
insertdata()
{
  this.busdetails= this.busservices.postBus(this.bus).subscribe((data)=>{this.result=data;})
}
del;
deletedata(id)
{
  this.busdetails=this.busservices.deleteBus(id).subscribe((data)=>{this.del=data;})
}
}
