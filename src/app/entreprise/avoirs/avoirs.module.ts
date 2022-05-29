import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvoirsPageRoutingModule } from './avoirs-routing.module';
import { AvoirsPage } from './avoirs.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { QrcodeService } from 'src/app/shared/services/qrcode.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvoirsPageRoutingModule,
    SharedModule
  ],
  declarations: [AvoirsPage],
  providers:[EntrepriseService,QrcodeService]
})
export class AvoirsPageModule {}
