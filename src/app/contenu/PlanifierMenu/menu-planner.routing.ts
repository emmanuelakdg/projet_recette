
/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPlannerComponent } from './menu-planner.component';

const routes: Routes = [
  {
    path: 'menu-planner',
    component: MenuPlannerComponent
  },
  // Ajoutez ici d'autres routes spécifiques à la planification de menus
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPlannerRoutingModule { }*/
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuPlannerComponent } from './menu-planner.component';

const routes: Routes = [
  {
    path: "",
    component: MenuPlannerComponent
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
export class MenuPlannerRoutingModule { }

