import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "../shared/shared.module";
import {ModalModule} from "./modal/modal.module";
import {CardComfirmComponent } from './view/admin-panel/content/products/product-card/card-comfirm/card-comfirm.component';
import {AuthGuard} from "../shared/services/auth.guard";



@NgModule({
  declarations: [
    AppComponent,
    CardComfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ModalModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard], // Добавьте AuthGuard в список провайдеров

  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
