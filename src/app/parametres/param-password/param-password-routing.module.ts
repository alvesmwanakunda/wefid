import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamPasswordPage } from './param-password.page';

const routes: Routes = [
  {
    path: '',
    component: ParamPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamPasswordPageRoutingModule {}
