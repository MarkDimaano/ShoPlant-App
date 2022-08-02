import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccsetPage } from './accset.page';

const routes: Routes = [
  {
    path: '',
    component: AccsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccsetPageRoutingModule {}
