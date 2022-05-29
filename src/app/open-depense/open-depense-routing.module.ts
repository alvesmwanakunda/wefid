import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenDepensePage } from './open-depense.page';

const routes: Routes = [
  {
    path: '',
    component: OpenDepensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenDepensePageRoutingModule {}
