import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVisitePage } from './modal-visite.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVisitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVisitePageRoutingModule {}
