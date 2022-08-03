import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ParamPasswordPageRoutingModule } from './param-password-routing.module';
import { ParamPasswordPage } from './param-password.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientService } from 'src/app/shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ParamPasswordPageRoutingModule,
    SharedModule
  ],
  declarations: [ParamPasswordPage],
  providers:[ClientService]
})
export class ParamPasswordPageModule {}
