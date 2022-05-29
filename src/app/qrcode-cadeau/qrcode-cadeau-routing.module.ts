import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeCadeauPage } from './qrcode-cadeau.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeCadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeCadeauPageRoutingModule {}
