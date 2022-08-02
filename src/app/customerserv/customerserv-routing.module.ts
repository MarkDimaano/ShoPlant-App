import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerservPage } from './customerserv.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerservPageRoutingModule {}
