import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: "",
    component: MenuComponent
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
export class MenuRoutingModule { }