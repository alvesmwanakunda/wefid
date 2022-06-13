import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitePage } from './visite.page';

const routes: Routes = [
  {
    path: '',
    component: VisitePage
  },
  {
    path: 'modal-visite',
    loadChildren: () => import('./modal-visite/modal-visite.module').then( m => m.ModalVisitePageModule)
  },
  /*{
    path: 'visite-entreprise',
    loadChildren: () => import('./visite-entreprise/visite-entreprise.module').then( m => m.VisiteEntreprisePageModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitePageRoutingModule {}
