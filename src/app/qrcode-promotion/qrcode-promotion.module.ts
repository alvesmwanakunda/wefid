import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrcodePromotionPageRoutingModule } from './qrcode-promotion-routing.module';
import { QrcodePromotionPage } from './qrcode-promotion.page';
import { SharedModule } from '../shared/shared.module';
import { QrcodeService } from '../shared/services/qrcode.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePromotionPageRoutingModule,
    SharedModule
  ],
  declarations: [QrcodePromotionPage],
  providers:[QrcodeService]
})
export class QrcodePromotionPageModule {}
