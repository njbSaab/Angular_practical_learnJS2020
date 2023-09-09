import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../shared/services/auth.guard";

const routes: Routes =   [
  {
    path: '',
    redirectTo: 'admin-panel',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./view/login/login.module').then(mod => mod.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/sign-up/sign-up.module').then(mod => mod.SignUpModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./view/admin-panel/admin-panel.module').then(mod => mod.AdminPanelModule),
  },
  {
    path: '**',
    redirectTo:'admin-panel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
