import { Component,  } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage{

  constructor() { }

  public form = {
    name: "",
    email: "",
    contact:"",
    verification: ""
  }
  print(){
    console.log(this.form)
  }

}
