import { NgModule } from '@angular/core';
import {AdminPanelComponent} from "./admin-panel.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../../../shared/shared.module";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {CommonModule} from "@angular/common";
import {ProductsModule} from "./content/products/products.module";



@NgModule({
  declarations: [
    AdminPanelComponent,
    HeaderComponent,
    NavBarComponent,
  ],

  imports: [
    AdminPanelRoutingModule,
    SharedModule,
    CommonModule,
    ProductsModule
  ],

})
export class AdminPanelModule { }
