import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'our',
    loadChildren: () => import('./Ourvissionandmission/our/our.module').then( m => m.OurPageModule)
  },
  {
    path: 'values',
    loadChildren: () => import('./values/values/values.module').then( m => m.ValuesPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'desciples',
    loadChildren: () => import('./desciples/desciples/desciples.module').then( m => m.DesciplesPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus/contactus.module').then( m => m.ContactusPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
