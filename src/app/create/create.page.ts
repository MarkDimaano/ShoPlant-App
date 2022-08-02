import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{

  constructor() { }

    public form={
      firstname: "",
      midname:"",
      lastname: "",
      address:"",
      contact: "",
      username:"",
      email: "",
      password:"",
      conpassword: ""
  
    }
    print(){
      console.log(this.form)
    }
  }

