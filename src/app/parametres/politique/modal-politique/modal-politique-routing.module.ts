import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPolitiquePage } from './modal-politique.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPolitiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPolitiquePageRoutingModule {}
