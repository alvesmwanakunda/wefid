import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailPlanPageRoutingModule } from './detail-plan-routing.module';
import { DetailPlanPage } from './detail-plan.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPlanPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailPlanPage]
})
export class DetailPlanPageModule {}
