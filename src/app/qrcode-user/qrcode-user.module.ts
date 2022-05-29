import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrcodeUserPageRoutingModule } from './qrcode-user-routing.module';
import { QrcodeUserPage } from './qrcode-user.page';
import { SharedModule } from '../shared/shared.module';
import { QrcodeService } from '../shared/services/qrcode.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeUserPageRoutingModule,
    SharedModule
  ],
  declarations: [QrcodeUserPage],
  providers:[QrcodeService]
})
export class QrcodeUserPageModule {}
