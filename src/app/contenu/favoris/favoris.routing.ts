import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavorisComponent } from './favoris.component';

const routes: Routes = [
  {
    path: "",
    component: FavorisComponent
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
export class FavorisRoutingModule { }