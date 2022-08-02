import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-customerserv',
  templateUrl: './customerserv.page.html',
  styleUrls: ['./customerserv.page.scss'],
})
export class CustomerservPage{

  constructor(
    private alertCtrl: AlertController,
    ) { }

  async showAlert(){
   const alert = await this.alertCtrl.create({
    header: 'Alert',
    message: 'Your concern has been sent. kindly wait someone will catch up on you.',
  buttons:['Ok']  
  })
    await alert.present();
  }

  public form = {
    email: "",
    contact: "",
    kindly: ""
  }
  print(){
    console.log(this.form)
  }

}
