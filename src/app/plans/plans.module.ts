import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlansPageRoutingModule } from './plans-routing.module';
import { PlansPage } from './plans.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlansPageRoutingModule,
    SharedModule
  ],
  declarations: [PlansPage]
})
export class PlansPageModule {}
