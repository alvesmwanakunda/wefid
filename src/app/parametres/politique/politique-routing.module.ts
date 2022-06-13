import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolitiquePage } from './politique.page';

const routes: Routes = [
  {
    path: '',
    component: PolitiquePage
  },
  {
    path: 'model-legal',
    loadChildren: () => import('./model-legal/model-legal.module').then( m => m.ModelLegalPageModule)
  },
  {
    path: 'modal-politique',
    loadChildren: () => import('./modal-politique/modal-politique.module').then( m => m.ModalPolitiquePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolitiquePageRoutingModule {}
