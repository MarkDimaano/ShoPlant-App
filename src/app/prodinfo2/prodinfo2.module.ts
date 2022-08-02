import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prodinfo2PageRoutingModule } from './prodinfo2-routing.module';

import { Prodinfo2Page } from './prodinfo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prodinfo2PageRoutingModule
  ],
  declarations: [Prodinfo2Page]
})
export class Prodinfo2PageModule {}
