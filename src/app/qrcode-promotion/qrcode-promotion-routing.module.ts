import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodePromotionPage } from './qrcode-promotion.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodePromotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodePromotionPageRoutingModule {}
