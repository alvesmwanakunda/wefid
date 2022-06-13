import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsVisitePage } from './tabs-visite.page';

const routes: Routes = [
  {
    path: '',
    component: TabsVisitePage,
    children:[
      {
        path:"visite",
        loadChildren: () => import('../visite/visite.module').then( m => m.VisitePageModule)
      },
      {
        path: 'visite-entreprise/:id',
        loadChildren: () => import('../visite/visite-entreprise/visite-entreprise.module').then( m => m.VisiteEntreprisePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-visite/visite',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsVisitePageRoutingModule {}
