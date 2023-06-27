import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { SubscribeRoutingModule } from './subscribe.routing';
import { PagesModule } from 'src/app/pages/pages.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    PagesModule
  ],
  declarations: [SubscribeComponent, LoginComponent, SignInComponent]
})
export class SubscribeModule { }
