import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalVisitePageRoutingModule } from './modal-visite-routing.module';
import { ModalVisitePage } from './modal-visite.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVisitePageRoutingModule,
    SharedModule
  ],
  declarations: [ModalVisitePage]
})
export class ModalVisitePageModule {}
