import {Component, Input} from '@angular/core';
import {ICardsProductInterface} from "../../shared/intarfaces/cards-product.interface";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productCardForInterpolation: ICardsProductInterface | undefined;
}

