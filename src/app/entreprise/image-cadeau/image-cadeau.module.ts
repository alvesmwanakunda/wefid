import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageCadeauPageRoutingModule } from './image-cadeau-routing.module';
import { ImageCadeauPage } from './image-cadeau.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageCadeauPageRoutingModule,
    SharedModule
  ],
  declarations: [ImageCadeauPage],
  providers:[EntrepriseService]
})
export class ImageCadeauPageModule {}
