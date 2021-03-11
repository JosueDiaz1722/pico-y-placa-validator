import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { TravelValidatorService } from "./validator/travel-validator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public licenseRegex = "[A-Z]{3}-[0-9]{4}";
  public dateRegex ="((0[13578]|1[02])[\/.]31[\/.](18|19|20)[0-9]{2})|((01|0[3-9]|1[1-2])[\/.](29|30)[\/.](18|19|20)[0-9]{2})|((0[1-9]|1[0-2])[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))"

  public input: any;

  constructor(private formBuilder: FormBuilder,private _validatorService: TravelValidatorService) {
    this.input ={
      "license" : "",
      "date": "",
      "time": ""
    }
  }

  onSubmit(){
    this._validatorService.validate(this.input)
  }

}
