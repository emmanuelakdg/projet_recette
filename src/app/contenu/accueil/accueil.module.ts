import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { AcceuilRoutingModule } from './accueil.routing';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    PagesModule
  ],
  declarations: [AccueilComponent]
})
export class AccueilModule { }
