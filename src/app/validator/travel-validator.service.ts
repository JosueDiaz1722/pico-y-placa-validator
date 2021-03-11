import { Injectable } from '@angular/core';
import { IData } from "./data";
import swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class TravelValidatorService {

  constructor() { }

  confirmationAlert(){
    swal.fire('', 'Your car can be on the road', 'success')
  }

  failureAlert(){
    swal.fire('','Your car cannot be on the road', 'error')
  }

  validate(data:IData){
    var lastDigit: number = +data.license.substr(data.license.length - 1);
    var day = new Date(data.date).getDay();
    var time = data.time

    console.log(time)
  }
}
