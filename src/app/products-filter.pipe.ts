import { Pipe, PipeTransform } from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

 public transform(products: ICardsProductInterface[], searchTerm: string): ICardsProductInterface[] {
    if(!searchTerm){
      return products
    }
    return products.filter((product:ICardsProductInterface) =>
      `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
