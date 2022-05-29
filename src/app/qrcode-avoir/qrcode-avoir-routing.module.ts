import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeAvoirPage } from './qrcode-avoir.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeAvoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeAvoirPageRoutingModule {}
