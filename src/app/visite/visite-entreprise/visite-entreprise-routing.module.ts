import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisiteEntreprisePage } from './visite-entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: VisiteEntreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisiteEntreprisePageRoutingModule {}
