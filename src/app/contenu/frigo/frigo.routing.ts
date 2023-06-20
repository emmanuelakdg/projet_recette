import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrigoComponent } from './frigo.component';
import { AddIngrComponent } from './add-ingr/add-ingr.component'
import { DelIngrComponent } from './del-ingr/del-ingr.component'

const routes: Routes = [
  {
    path: "",
    component: FrigoComponent
  },
  
  {
    path: "add-ingr",
    component: AddIngrComponent
  },
  {
    path: "del-ingr",
    component: DelIngrComponent
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