import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdressePageRoutingModule } from './adresse-routing.module';
import { AdressePage } from './adresse.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdressePageRoutingModule,
    SharedModule
  ],
  declarations: [AdressePage],
  providers:[EntrepriseService]
})
export class AdressePageModule {}
