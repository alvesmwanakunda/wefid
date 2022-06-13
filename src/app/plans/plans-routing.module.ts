import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansPage } from './plans.page';

const routes: Routes = [
  {
    path: '',
    component: PlansPage
  },
  {
    path: 'detail-plan',
    loadChildren: () => import('./detail-plan/detail-plan.module').then( m => m.DetailPlanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansPageRoutingModule {}
