import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdressePage } from './adresse.page';

const routes: Routes = [
  {
    path: '',
    component: AdressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdressePageRoutingModule {}
