import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfosPageRoutingModule } from './infos-routing.module';
import { InfosPage } from './infos.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientService } from 'src/app/shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InfosPageRoutingModule,
    SharedModule
  ],
  declarations: [InfosPage],
  providers:[ClientService]
})
export class InfosPageModule {}
