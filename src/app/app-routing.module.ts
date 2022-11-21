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
    path: 'tela1',
    loadChildren: () => import('./tela1/tela1.module').then( m => m.Tela1PageModule)
  },
  {
    path: 'tela2',
    loadChildren: () => import('./tela2/tela2.module').then( m => m.Tela2PageModule)
  },
  {
    path: 'tela3',
    loadChildren: () => import('./tela3/tela3.module').then( m => m.Tela3PageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'comunidade',
    loadChildren: () => import('./comunidade/comunidade.module').then( m => m.ComunidadePageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./configuracao/configuracao.module').then( m => m.ConfiguracaoPageModule)
  },
  {
    path: 'adocao',
    loadChildren: () => import('./adocao/adocao.module').then( m => m.AdocaoPageModule)
  },
  {
    path: 'comunidade2',
    loadChildren: () => import('./comunidade2/comunidade2.module').then( m => m.Comunidade2PageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
