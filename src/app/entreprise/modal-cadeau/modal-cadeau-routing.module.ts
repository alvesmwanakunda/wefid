import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadeauPage } from './modal-cadeau.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadeauPageRoutingModule {}
