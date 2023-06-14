import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecettesComponent } from './recettes.component';
import { RecettesRoutingModule } from './recettes.routing';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    RecettesRoutingModule,
    PagesModule
  ],
  declarations: [RecettesComponent]
})
export class RecettesModule { }
