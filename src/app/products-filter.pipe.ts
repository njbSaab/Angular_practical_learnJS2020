import { Pipe, PipeTransform } from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";

@Pipe({
  name: 'productsFilter',
  pure: false
})
export class ProductsFilterPipe implements PipeTransform {

 public transform(products: ICardsProductInterface[], searchTerm: string, onlyFavorites: boolean = false): ICardsProductInterface[] {
   let result: ICardsProductInterface[] = products
    if(onlyFavorites){
      result = products.filter((product:ICardsProductInterface)=> product.isFavorite)
    }
    if(!searchTerm){
      return result
    }
    return result.filter((product:ICardsProductInterface) =>
      `${product.title} ${product.price}`.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
