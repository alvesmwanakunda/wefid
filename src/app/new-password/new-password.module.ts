import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { NewPasswordPageRoutingModule } from './new-password-routing.module';
import { NewPasswordPage } from './new-password.page';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPasswordPageRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [NewPasswordPage],
  providers:[AuthService]
})
export class NewPasswordPageModule {}
