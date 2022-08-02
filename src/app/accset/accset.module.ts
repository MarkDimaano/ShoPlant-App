import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccsetPageRoutingModule } from './accset-routing.module';

import { AccsetPage } from './accset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccsetPageRoutingModule
  ],
  declarations: [AccsetPage]
})
export class AccsetPageModule {}
