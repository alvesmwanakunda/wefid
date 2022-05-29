import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FidelitesPageRoutingModule } from './fidelites-routing.module';

import { FidelitesPage } from './fidelites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FidelitesPageRoutingModule
  ],
  declarations: [FidelitesPage]
})
export class FidelitesPageModule {}
