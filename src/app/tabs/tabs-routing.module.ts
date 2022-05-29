import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:"dashboard",
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path:"plans",
        loadChildren: () => import('../plans/plans.module').then( m => m.PlansPageModule)
      },
      {
        path: 'messageries',
        loadChildren: () => import('../messageries/messageries.module').then( m => m.MessageriesPageModule)
      },
      {
        path: 'fidelites',
        loadChildren: () => import('../fidelites/fidelites.module').then( m => m.FidelitesPageModule)
      },
      {
        path: 'parametres',
        loadChildren: () => import('../parametres/parametres.module').then( m => m.ParametresPageModule)
      },
      {
        path: 'entreprise/:id',
        loadChildren: () => import('../entreprise/entreprise.module').then( m => m.EntreprisePageModule)
      },
      {
        path: 'avoirs/:id',
        loadChildren: () => import('../entreprise/avoirs/avoirs.module').then( m => m.AvoirsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
