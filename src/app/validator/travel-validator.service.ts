import { Injectable } from '@angular/core';
import { IData } from "./data";

@Injectable({
  providedIn: 'root'
})
export class TravelValidatorService {

  constructor() { }

  validate(data:IData){
    var lastDigit: number = +data.license.substr(data.license.length - 1);
    var day = new Date(data.date).getDay();
    var time = data.time

    console.log(time)
  }
}
