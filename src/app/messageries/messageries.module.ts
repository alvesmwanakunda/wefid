import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessageriesPageRoutingModule } from './messageries-routing.module';
import { MessageriesPage } from './messageries.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageriesPageRoutingModule,
    SharedModule
  ],
  declarations: [MessageriesPage]
})
export class MessageriesPageModule {}
