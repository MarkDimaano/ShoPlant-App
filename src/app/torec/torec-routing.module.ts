import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TorecPage } from './torec.page';

const routes: Routes = [
  {
    path: '',
    component: TorecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorecPageRoutingModule {}
