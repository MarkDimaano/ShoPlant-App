import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prodinfo2Page } from './prodinfo2.page';

const routes: Routes = [
  {
    path: '',
    component: Prodinfo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prodinfo2PageRoutingModule {}
