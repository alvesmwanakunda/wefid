import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageriesPage } from './messageries.page';

const routes: Routes = [
  {
    path: '',
    component: MessageriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageriesPageRoutingModule {}
