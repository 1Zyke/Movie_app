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
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'mivida',
    loadChildren: () => import('./mivida/mivida.module').then( m => m.MividaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'neon',
    loadChildren: () => import('./neon/neon.module').then( m => m.NeonPageModule)
  },
  {
    path: 'morp',
    loadChildren: () => import('./morp/morp.module').then( m => m.MorpPageModule)
  },
  {
    path: 'smith',
    loadChildren: () => import('./smith/smith.module').then( m => m.SmithPageModule)
  },
  {
    path: 'momento1',
    loadChildren: () => import('./momento1/momento1.module').then( m => m.Momento1PageModule)
  },
  {
    path: 'momento2',
    loadChildren: () => import('./momento2/momento2.module').then( m => m.Momento2PageModule)
  },
  {
    path: 'momento3',
    loadChildren: () => import('./momento3/momento3.module').then( m => m.Momento3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
