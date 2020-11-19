import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
bookingform:FormGroup;
submitted=false;
constructor(private formBuiilder:FormBuilder) { }
ngOnInit() {
  this.bookingform = this.formBuiilder.group({
 },);
}
 get f(){return this.bookingform.controls;}

 onSubmit(){
   this.submitted = true;

   if(this.bookingform.invalid)
   {
     return;
   }

 }
}
