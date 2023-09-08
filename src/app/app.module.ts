import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";
import {enviroment} from "../enviroment/enviroment";
import {ModalModule} from "./modal/modal.module";
import { CardComfirmComponent } from './product-card/card-comfirm/card-comfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    CardComfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ModalModule,
    AppRoutingModule
    //   .forRoot(
    //   [
    //     {
    //       path: 'login'
    //     }
    //   ]
    // ),
  ],
  providers: [ProductService,
    {
      provide: 'baseURL',
      useValue: enviroment.baseURL
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
