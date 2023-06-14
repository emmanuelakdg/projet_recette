import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AproposComponent } from './apropos.component';
import { PagesModule } from 'src/app/pages/pages.module';
import { AproposRoutingModule } from './apropos.routing';

@NgModule({
  imports: [
    CommonModule,
    AproposRoutingModule,
    PagesModule
  ],
  declarations: [AproposComponent]
})
export class AproposModule { }
