import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrigoComponent } from './frigo.component';
import { FrigoRoutingModule } from './frigo.routing';
import { PagesModule } from 'src/app/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    FrigoRoutingModule,
    PagesModule
  ],
  declarations: [FrigoComponent]
})
export class FrigoModule { }
