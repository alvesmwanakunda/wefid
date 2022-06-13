import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PolitiquePageRoutingModule } from './politique-routing.module';
import { PolitiquePage } from './politique.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolitiquePageRoutingModule,
    SharedModule,
  ],
  declarations: [PolitiquePage]
})
export class PolitiquePageModule {}
