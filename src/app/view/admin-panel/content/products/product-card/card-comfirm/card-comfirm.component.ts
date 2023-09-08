import {Component, Input} from '@angular/core';
import {ICardsProductInterface} from "../../../../../../../shared/intarfaces/cards-product.interface";

@Component({
  selector: 'app-card-comfirm',
  templateUrl: './card-comfirm.component.html',
  styleUrls: ['./card-comfirm.component.scss']
})
export class CardComfirmComponent {

  @Input()
  public product?:ICardsProductInterface
  public close(){}
  public save(){}
}
