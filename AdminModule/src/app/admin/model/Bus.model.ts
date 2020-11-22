import { Time } from '@angular/common';

export class Busmodel
{Bus_number:number;
    Bus_name:string;
    Source_station:string;
    Destination:string;
    startdate:Date;
    enddate?:Date;
    Duration?:Time;
    Available_number_of_seats:number;
}