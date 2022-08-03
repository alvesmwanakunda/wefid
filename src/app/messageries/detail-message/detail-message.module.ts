import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailMessagePageRoutingModule } from './detail-message-routing.module';
import { DetailMessagePage } from './detail-message.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { ClientService } from 'src/app/shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMessagePageRoutingModule,
    SharedModule
  ],
  declarations: [DetailMessagePage],
  providers:[EntrepriseService,ClientService]
})
export class DetailMessagePageModule {}
