import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prodinfo3Page } from './prodinfo3.page';

const routes: Routes = [
  {
    path: '',
    component: Prodinfo3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prodinfo3PageRoutingModule {}
