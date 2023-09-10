import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductsComponent} from "./products.component";
import {OneProductComponent} from "./one-product/one-product.component";

const routes: Routes =   [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductCardComponent
      }
    ]
  },
  {
    path: 'id',
    component: OneProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }