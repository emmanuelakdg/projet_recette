import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecettesComponent } from './recettes.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [
  {
    path: "",
    component: RecettesComponent
  },
  {
    path: "single-recette/:ingr",
    component: RecetteComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecettesRoutingModule { }