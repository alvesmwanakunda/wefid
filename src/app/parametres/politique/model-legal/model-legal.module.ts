import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModelLegalPageRoutingModule } from './model-legal-routing.module';
import { ModelLegalPage } from './model-legal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelLegalPageRoutingModule,
    SharedModule
  ],
  declarations: [ModelLegalPage]
})
export class ModelLegalPageModule {}
