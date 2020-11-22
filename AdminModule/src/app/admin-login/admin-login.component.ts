import { Component, OnInit } from '@angular/core';
import { AdminServices} from 'src/app/services/adminservices';
import { adminmodel } from '../admin/model/admin.model';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:adminmodel;
  admins;
  result;
  del;
  admindetails:any=[];
  constructor(private adservice: AdminServices) { }

  ngOnInit(): void {
    this.fetchAdmin();
    this.insertadmin();
  }
  fetchAdmin()
  {
    this.admindetails=this.adservice.getAdmin().subscribe( (data)=>{this.admins=data;})
  }
  insertadmin()
  {
    this.admindetails=this.adservice.postAdmin(this.admin).subscribe((data)=>{this.result=data;})
  }
deleteadmin(Username)
{
  this.admindetails=this.adservice.deleteAdmin(Username).subscribe((data)=>{this.del=data;})
}
}
