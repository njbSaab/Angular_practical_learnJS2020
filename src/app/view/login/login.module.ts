import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../../shared/shared.module";
import {LoginRoutingModule} from "./login-routing.module";
import {JsonPipe} from "@angular/common";
import { UserValidatorDirective } from './user-validator.directive';



@NgModule({
  declarations: [LoginComponent, UserValidatorDirective],
    imports: [
        SharedModule,
        LoginRoutingModule,
        JsonPipe
    ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
