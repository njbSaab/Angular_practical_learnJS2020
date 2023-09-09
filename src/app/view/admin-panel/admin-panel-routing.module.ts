import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPanelComponent} from "./admin-panel.component";

const routes: Routes =   [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./content/products/products.module').then(mod => mod.ProductsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
