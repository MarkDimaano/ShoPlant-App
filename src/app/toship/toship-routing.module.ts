import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToshipPage } from './toship.page';

const routes: Routes = [
  {
    path: '',
    component: ToshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToshipPageRoutingModule {}
