import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorecPageRoutingModule } from './torec-routing.module';

import { TorecPage } from './torec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorecPageRoutingModule
  ],
  declarations: [TorecPage]
})
export class TorecPageModule {}
