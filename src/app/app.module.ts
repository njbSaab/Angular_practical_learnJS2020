import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './view/admin-panel/nav-bar/nav-bar.component';
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './view/admin-panel/header/header.component';
import { ProductCardComponent } from './view/admin-panel/content/products/product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import {ProductService} from "./product.service";
import {HttpClientModule} from "@angular/common/http";
import {enviroment} from "../enviroment/enviroment";
import {ModalModule} from "./modal/modal.module";
import { CardComfirmComponent } from './view/admin-panel/content/products/product-card/card-comfirm/card-comfirm.component';
import { LoginComponent } from './view/login/login.component';
import {RouterModule} from "@angular/router";
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { AdminPanelComponent } from './view/admin-panel/admin-panel.component';
import { ProductsComponent } from './view/admin-panel/content/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    CardComfirmComponent,
    LoginComponent,
    SignUpComponent,
    AdminPanelComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ModalModule,
    AppRoutingModule
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
