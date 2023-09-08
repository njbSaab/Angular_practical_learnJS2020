import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {SignUpComponent} from "./view/sign-up/sign-up.component";
import {AdminPanelComponent} from "./view/admin-panel/admin-panel.component";
import {ProductsComponent} from "./view/admin-panel/content/products/products.component";

const routes: Routes =   [
  {
    path: '',
    redirectTo: 'admin-panel',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      }

    ]
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
