import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCadeauPage } from './detail-cadeau.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCadeauPageRoutingModule {}
