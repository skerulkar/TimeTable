import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '**', component: LoginComponent },
  // { 
  //   path: 'profile', 
  //   component: ProfileComponent, 
  //   canActivate: [AuthGuard] 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
