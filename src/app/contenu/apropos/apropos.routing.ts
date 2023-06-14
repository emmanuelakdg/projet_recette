import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AproposComponent } from './apropos.component';

const routes: Routes = [
  {
    path: "",
    component: AproposComponent
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
export class AproposRoutingModule { }