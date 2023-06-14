import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecettesComponent } from './recettes.component';

const routes: Routes = [
  {
    path: "",
    component: RecettesComponent
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