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
  
    if ((time >= "07:00" && time <= "09:30") || (time >= "16:00" && time <= "19:30")) 
    {
      switch (day) {
        case 1:

            if (lastDigit == 1 || lastDigit == 2) {
              this.failureAlert();
            }
            else {
              this.confirmationAlert();
            }
            break;
        case 2:

            if (lastDigit == 3 || lastDigit == 4) {
              this.failureAlert();
            }
            else {
              this.confirmationAlert();
            }
            break;
        case 3:

            if (lastDigit == 5 || lastDigit == 6) {
              this.failureAlert();
            }
            else {
              this.confirmationAlert();
            }
            break;

        case 4:

            if (lastDigit == 7 || lastDigit == 8) {
              this.failureAlert();
            }
            else {
              this.confirmationAlert();
            }
            break;

        case 5:

            if (lastDigit == 0 || lastDigit == 9) {
              this.failureAlert();
            }
            else {
              this.confirmationAlert();
            }
            break;
        default:
          this.confirmationAlert();
        }
    }else{
      this.confirmationAlert();
    }
  }
}
