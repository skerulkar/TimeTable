import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorisedLayoutComponent,
    // children: [
    //   { path: '', component: LandingPageComponent, pathMatch: 'full'},
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
