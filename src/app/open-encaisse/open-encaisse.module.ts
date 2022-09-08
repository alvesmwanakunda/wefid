import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OpenEncaissePageRoutingModule } from './open-encaisse-routing.module';
import { OpenEncaissePage } from './open-encaisse.page';
import { SharedModule } from '../shared/shared.module';
import { EntrepriseService } from '../shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenEncaissePageRoutingModule,
    SharedModule
  ],
  declarations: [OpenEncaissePage],
  providers:[EntrepriseService]
})
export class OpenEncaissePageModule {}
