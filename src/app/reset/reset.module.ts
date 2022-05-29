import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ResetPageRoutingModule } from './reset-routing.module';
import { ResetPage } from './reset.page';
import { AuthService } from '../shared/services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ResetPage],
  providers:[AuthService]
})
export class ResetPageModule {}
