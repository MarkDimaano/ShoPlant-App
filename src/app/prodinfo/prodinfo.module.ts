import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdinfoPageRoutingModule } from './prodinfo-routing.module';

import { ProdinfoPage } from './prodinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdinfoPageRoutingModule
  ],
  declarations: [ProdinfoPage]
})
export class ProdinfoPageModule {}
