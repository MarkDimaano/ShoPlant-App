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
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'option',
    loadChildren: () => import('./option/option.module').then( m => m.OptionPageModule)
  },
  {
    path: 'customerserv',
    loadChildren: () => import('./customerserv/customerserv.module').then( m => m.CustomerservPageModule)
  },
  {
    path: 'yourorder',
    loadChildren: () => import('./yourorder/yourorder.module').then( m => m.YourorderPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'prodinfo',
    loadChildren: () => import('./prodinfo/prodinfo.module').then( m => m.ProdinfoPageModule)
  },
  {
    path: 'prodinfo2',
    loadChildren: () => import('./prodinfo2/prodinfo2.module').then( m => m.Prodinfo2PageModule)
  },
  {
    path: 'prodinfo3',
    loadChildren: () => import('./prodinfo3/prodinfo3.module').then( m => m.Prodinfo3PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'accset',
    loadChildren: () => import('./accset/accset.module').then( m => m.AccsetPageModule)
  },
  {
    path: 'toship',
    loadChildren: () => import('./toship/toship.module').then( m => m.ToshipPageModule)
  },
  {
    path: 'torec',
    loadChildren: () => import('./torec/torec.module').then( m => m.TorecPageModule)
  },
  {
    path: 'cancelled',
    loadChildren: () => import('./cancelled/cancelled.module').then( m => m.CancelledPageModule)
  },
  {
    path: 'completed',
    loadChildren: () => import('./completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
