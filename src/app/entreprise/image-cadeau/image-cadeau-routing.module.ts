import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageCadeauPage } from './image-cadeau.page';

const routes: Routes = [
  {
    path: '',
    component: ImageCadeauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageCadeauPageRoutingModule {}
