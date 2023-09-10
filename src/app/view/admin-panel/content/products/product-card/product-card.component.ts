import {Component, Input} from '@angular/core';
import {ICardsProductInterface} from "../../../../../../shared/intarfaces/cards-product.interface";
import {ModalService} from "../../../../../modal/modal.service";
import {CardComfirmComponent} from "./card-comfirm/card-comfirm.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() productCardForInterpolation: ICardsProductInterface | undefined;

  constructor(
    private readonly modalService: ModalService
  ) {
  }
  public toggleFavorite(): void{
    this.productCardForInterpolation!.isFavorite = !this.productCardForInterpolation?.isFavorite
  }
  public addedProduct(){
    this.modalService.open({
      component: CardComfirmComponent,
      context: {
        product:{...this.productCardForInterpolation},
        save: ()=>{console.log('save')},
        close: () => {
          this.modalService.close()
        }
      }
    })
  }
}

