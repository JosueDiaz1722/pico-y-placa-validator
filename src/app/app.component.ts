import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public licenseRegex = "[A-Z]{3}-[0-9]{4}";
  public dateRegex ="/^(31[ \/ ](0[13578]|1[02])[ \/ ](18|19|20)[0-9]{2})|((29|30)[\/](01|0[3-9]|1[1-2])[\/](18|19|20)[0-9]{2})|((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[0-2])[\/](18|19|20)[0-9]{2})|(29[\/](02)[\/](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))$/"

  public input: any;

  constructor(private formBuilder: FormBuilder) {
    this.input ={
      "license" : "",
      "date": "",
      "time": ""
    }
  }

  onSubmit(){
    console.log(this.input)
  }

}
