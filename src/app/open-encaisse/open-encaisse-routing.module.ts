import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenEncaissePage } from './open-encaisse.page';

const routes: Routes = [
  {
    path: '',
    component: OpenEncaissePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenEncaissePageRoutingModule {}
