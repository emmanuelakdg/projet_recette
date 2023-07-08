import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrigoComponent } from './frigo.component';
import { FrigoRoutingModule } from './frigo.routing';
import { PagesModule } from 'src/app/pages/pages.module';
import { ManageFridgeComponent } from './manage-fridge/manage-fridge.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FrigoRoutingModule,
    PagesModule,
    FormsModule
  ],
  declarations: [FrigoComponent, ManageFridgeComponent, ListComponent],
  exports:[
    ManageFridgeComponent
  ]
})
export class FrigoModule { }
