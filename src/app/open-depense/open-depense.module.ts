import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenDepensePageRoutingModule } from './open-depense-routing.module';

import { OpenDepensePage } from './open-depense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenDepensePageRoutingModule
  ],
  declarations: [OpenDepensePage]
})
export class OpenDepensePageModule {}
