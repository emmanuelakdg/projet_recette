import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrigoComponent } from './frigo.component';
import { FrigoRoutingModule } from './frigo.routing';
import { PagesModule } from '../../../app/pages/pages.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FrigoRoutingModule,
    PagesModule,
    FormsModule
  ],
  declarations: [FrigoComponent],
  exports:[
  ]
})
export class FrigoModule { }
