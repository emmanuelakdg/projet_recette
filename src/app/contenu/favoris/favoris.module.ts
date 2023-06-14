import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorisComponent } from './favoris.component';
import { FavorisRoutingModule } from './favoris.routing';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    FavorisRoutingModule,
    PagesModule
  ],
  declarations: [FavorisComponent]
})
export class FavorisModule { }
