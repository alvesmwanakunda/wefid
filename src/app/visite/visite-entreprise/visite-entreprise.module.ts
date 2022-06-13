import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisiteEntreprisePageRoutingModule } from './visite-entreprise-routing.module';
import { VisiteEntreprisePage } from './visite-entreprise.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisiteEntreprisePageRoutingModule,
    SharedModule
  ],
  declarations: [VisiteEntreprisePage],
  providers:[EntrepriseService]
})
export class VisiteEntreprisePageModule {}
