import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrigoComponent } from './frigo.component';

const routes: Routes = [
  {
    path: "",
    component: FrigoComponent
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
export class FrigoRoutingModule { }