import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{

  constructor() { }

    public form={
      lastname: "",
      firstname: "",
      contact: "",
      email: "",
      password:"",
      conpassword: ""
  
    }
    print(){
      console.log(this.form)
    }
  }

