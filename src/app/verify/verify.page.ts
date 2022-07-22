import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage {

  constructor() { }
  public form = {
    newpass: "",
    conpass: ""
  }
  print(){
    console.log(this.form)
  }
  

}
