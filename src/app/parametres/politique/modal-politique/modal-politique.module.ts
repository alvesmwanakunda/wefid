import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPolitiquePageRoutingModule } from './modal-politique-routing.module';
import { ModalPolitiquePage } from './modal-politique.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPolitiquePageRoutingModule,
    SharedModule
  ],
  declarations: [ModalPolitiquePage]
})
export class ModalPolitiquePageModule {}
