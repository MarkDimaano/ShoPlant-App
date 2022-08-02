import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerservPageRoutingModule } from './customerserv-routing.module';

import { CustomerservPage } from './customerserv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerservPageRoutingModule
  ],
  declarations: [CustomerservPage]
})
export class CustomerservPageModule {}
