import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrcodeAvoirPageRoutingModule } from './qrcode-avoir-routing.module';
import { QrcodeAvoirPage } from './qrcode-avoir.page';
import { SharedModule } from '../shared/shared.module';
import { QrcodeService } from '../shared/services/qrcode.service';
import { EntrepriseService } from '../shared/services/entreprise.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeAvoirPageRoutingModule,
    SharedModule
  ],
  declarations: [QrcodeAvoirPage],
  providers:[QrcodeService, EntrepriseService]
})
export class QrcodeAvoirPageModule {}
