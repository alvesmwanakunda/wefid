import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';
import { SharedModule } from '../shared/shared.module';
import { ClientService } from '../shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpPage],
  providers:[ClientService]
})
export class SignUpPageModule {}
