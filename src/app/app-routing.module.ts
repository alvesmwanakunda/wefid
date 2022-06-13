import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'reset/:phone',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'new-password/:phone/:code',
    loadChildren: () => import('./new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  /*{
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },*/
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'qrcode-user',
    loadChildren: () => import('./qrcode-user/qrcode-user.module').then( m => m.QrcodeUserPageModule)
  },
  /*{
    path: 'visite',
    loadChildren: () => import('./visite/visite.module').then( m => m.VisitePageModule)
  },*/
  {
    path: 'qrcode-cadeau',
    loadChildren: () => import('./qrcode-cadeau/qrcode-cadeau.module').then( m => m.QrcodeCadeauPageModule)
  },
  {
    path: 'qrcode-avoir',
    loadChildren: () => import('./qrcode-avoir/qrcode-avoir.module').then( m => m.QrcodeAvoirPageModule)
  },
  {
    path: 'open-encaisse',
    loadChildren: () => import('./open-encaisse/open-encaisse.module').then( m => m.OpenEncaissePageModule)
  },
  {
    path: 'open-depense',
    loadChildren: () => import('./open-depense/open-depense.module').then( m => m.OpenDepensePageModule)
  },
  {
    path: 'tabs-visite',
    loadChildren: () => import('./tabs-visite/tabs-visite.module').then( m => m.TabsVisitePageModule)
  },
  /*{
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  },*/
  /*{
    path: 'fidelites',
    loadChildren: () => import('./fidelites/fidelites.module').then( m => m.FidelitesPageModule)
  },*/
  /*{
    path: 'messageries',
    loadChildren: () => import('./messageries/messageries.module').then( m => m.MessageriesPageModule)
  },*/
  /*{
    path: 'plans',
    loadChildren: () => import('./plans/plans.module').then( m => m.PlansPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
