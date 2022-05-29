import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrcodeCadeauPageRoutingModule } from './qrcode-cadeau-routing.module';
import { QrcodeCadeauPage } from './qrcode-cadeau.page';
import { SharedModule } from '../shared/shared.module';
import { QrcodeService } from '../shared/services/qrcode.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeCadeauPageRoutingModule,
    SharedModule
  ],
  declarations: [QrcodeCadeauPage],
  providers:[QrcodeService]
})
export class QrcodeCadeauPageModule {}
