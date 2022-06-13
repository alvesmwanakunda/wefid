import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageriesPage } from './messageries.page';

const routes: Routes = [
  {
    path: '',
    component: MessageriesPage
  },
  {
    path: 'detail-message',
    loadChildren: () => import('./detail-message/detail-message.module').then( m => m.DetailMessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageriesPageRoutingModule {}
