import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidelitesPage } from './fidelites.page';

const routes: Routes = [
  {
    path: '',
    component: FidelitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidelitesPageRoutingModule {}
