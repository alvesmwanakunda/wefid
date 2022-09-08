import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OpenDepensePageRoutingModule } from './open-depense-routing.module';
import { OpenDepensePage } from './open-depense.page';
import { SharedModule } from '../shared/shared.module';
import { EntrepriseService } from '../shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenDepensePageRoutingModule,
    SharedModule
  ],
  declarations: [OpenDepensePage],
  providers:[EntrepriseService]
})
export class OpenDepensePageModule {}
