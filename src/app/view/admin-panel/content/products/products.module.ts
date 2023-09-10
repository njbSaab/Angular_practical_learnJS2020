import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {SharedModule} from "../../../../../shared/shared.module";
import {ProductService} from "./product-card/product.service";
import {enviroment} from "../../../../../enviroment/enviroment";
import { OneProductComponent } from './one-product/one-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    OneProductComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductService,
    {
      provide: 'baseURL',
      useValue: enviroment.baseURL
    },
  ],
})
export class ProductsModule { }
