import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailCadeauPageRoutingModule } from './detail-cadeau-routing.module';
import { DetailCadeauPage } from './detail-cadeau.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCadeauPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailCadeauPage],
  providers:[EntrepriseService]
})
export class DetailCadeauPageModule {}
