import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscribeComponent } from './subscribe.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: "",
    component: SubscribeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeRoutingModule { }