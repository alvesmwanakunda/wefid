import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalCadeauPageRoutingModule } from './modal-cadeau-routing.module';
import { ModalCadeauPage } from './modal-cadeau.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadeauPageRoutingModule,
    SharedModule
  ],
  declarations: [ModalCadeauPage],
  providers:[EntrepriseService]
})
export class ModalCadeauPageModule {}
