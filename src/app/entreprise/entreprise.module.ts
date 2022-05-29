import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EntreprisePageRoutingModule } from './entreprise-routing.module';
import { EntreprisePage } from './entreprise.page';
import { SharedModule } from '../shared/shared.module';
import { EntrepriseService } from '../shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntreprisePageRoutingModule,
    SharedModule
  ],
  declarations: [EntreprisePage],
  providers:[EntrepriseService]
})
export class EntreprisePageModule {}
