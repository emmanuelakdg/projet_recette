import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrigoComponent } from './frigo.component';
import { ManageFridgeComponent } from './manage-fridge/manage-fridge.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "",
    component: FrigoComponent
  },
  {
    path: "manage",
    component: ManageFridgeComponent
  },
  {
    path: "list",
    component: ListComponent
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