import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntreprisePage } from './entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: EntreprisePage
  },
  {
    path: 'modal-cadeau',
    loadChildren: () => import('./modal-cadeau/modal-cadeau.module').then( m => m.ModalCadeauPageModule)
  },
  {
    path: 'detail-cadeau',
    loadChildren: () => import('./detail-cadeau/detail-cadeau.module').then( m => m.DetailCadeauPageModule)
  },
  {
    path: 'adresse',
    loadChildren: () => import('./adresse/adresse.module').then( m => m.AdressePageModule)
  },
  {
    path: 'image-cadeau',
    loadChildren: () => import('./image-cadeau/image-cadeau.module').then( m => m.ImageCadeauPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntreprisePageRoutingModule {}
