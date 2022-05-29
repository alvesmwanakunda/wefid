import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenEncaissePageRoutingModule } from './open-encaisse-routing.module';

import { OpenEncaissePage } from './open-encaisse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenEncaissePageRoutingModule
  ],
  declarations: [OpenEncaissePage]
})
export class OpenEncaissePageModule {}
