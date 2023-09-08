import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalService} from "./modal.service";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    ModalService
  ]
})
export class ModalModule { }
