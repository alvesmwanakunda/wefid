import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParametresPageRoutingModule } from './parametres-routing.module';
import { ParametresPage } from './parametres.page';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametresPageRoutingModule,
    SharedModule
  ],
  declarations: [ParametresPage],
  providers:[AuthService]
})
export class ParametresPageModule {}
