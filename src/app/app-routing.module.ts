import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ClassDetailsComponent } from './class-details/class-details.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: ClassDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
