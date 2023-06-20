import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrigoComponent } from './frigo.component';
import { FrigoRoutingModule } from './frigo.routing';
import { PagesModule } from 'src/app/pages/pages.module';
import { AddIngrComponent } from './add-ingr/add-ingr.component';
import { DelIngrComponent } from './del-ingr/del-ingr.component';

@NgModule({
  imports: [
    CommonModule,
    FrigoRoutingModule,
    PagesModule
  ],
  declarations: [FrigoComponent, AddIngrComponent, DelIngrComponent]
})
export class FrigoModule { }
