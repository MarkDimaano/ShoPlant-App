import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToshipPageRoutingModule } from './toship-routing.module';

import { ToshipPage } from './toship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToshipPageRoutingModule
  ],
  declarations: [ToshipPage]
})
export class ToshipPageModule {}
