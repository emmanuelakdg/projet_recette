import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    PagesModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
