import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() {}

  public form = {
    username: "",
    password: ""
  }
  print(){
    console.log(this.form)
  }

}
