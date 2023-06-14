import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: "accueil",
    loadChildren: () => import('./contenu/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: "recettes",
    loadChildren: () => import('./contenu/recettes/recettes.module').then(m => m.RecettesModule)
  },
  {
    path: "my-frigo",
    loadChildren: () => import('./contenu/frigo/frigo.module').then(m => m.FrigoModule)
  },
  {
    path: "favoris",
    loadChildren: () => import('./contenu/favoris/favoris.module').then(m => m.FavorisModule)
  },
  {
    path: "menu",
    loadChildren: () => import('./contenu/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: "apropos",
    loadChildren: () => import('./contenu/apropos/apropos.module').then(m => m.AproposModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

