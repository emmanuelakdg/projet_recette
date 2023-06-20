import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPlannerComponent } from './menu-planner.component';
import { MenuPlannerRoutingModule } from './menu-planner.routing';
import { PagesModule } from 'src/app/pages/pages.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MenuPlannerRoutingModule,
    FormsModule,
    PagesModule
  ],
  declarations: [MenuPlannerComponent]
})
export class MenuPlannerModule { }
