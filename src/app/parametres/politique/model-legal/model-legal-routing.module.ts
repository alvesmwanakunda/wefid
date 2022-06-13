import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelLegalPage } from './model-legal.page';

const routes: Routes = [
  {
    path: '',
    component: ModelLegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelLegalPageRoutingModule {}
