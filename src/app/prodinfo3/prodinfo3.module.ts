import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prodinfo3PageRoutingModule } from './prodinfo3-routing.module';

import { Prodinfo3Page } from './prodinfo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prodinfo3PageRoutingModule
  ],
  declarations: [Prodinfo3Page]
})
export class Prodinfo3PageModule {}
