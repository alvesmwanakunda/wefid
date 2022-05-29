import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisitePageRoutingModule } from './visite-routing.module';
import { VisitePage } from './visite.page';
import { SharedModule } from '../shared/shared.module';
import { EntrepriseService } from '../shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitePageRoutingModule,
    SharedModule
  ],
  declarations: [VisitePage],
  providers:[EntrepriseService]
})
export class VisitePageModule {}
