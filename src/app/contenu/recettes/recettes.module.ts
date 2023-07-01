import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecettesComponent } from './recettes.component';
import { RecettesRoutingModule } from './recettes.routing';
import { PagesModule } from 'src/app/pages/pages.module';
import { RecetteComponent } from './recette/recette.component';

@NgModule({
  imports: [
    CommonModule,
    RecettesRoutingModule,
    PagesModule,
  ],
  declarations: [RecettesComponent, RecetteComponent]
})
export class RecettesModule { }
