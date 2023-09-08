import {Component, Inject} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {Observable} from "rxjs";
import {ICardsProductInterface} from "../../../../../shared/intarfaces/cards-product.interface";
import {ProductService} from "../../../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent {
  // for pipe filter
  public searchText = ''
  public value = '';
  //// for pipe filter
  public onlyFavorites = false

  public appProducts$!: Observable<ICardsProductInterface[]>;

  //with pipe async if we receive object
  // public appProducts$: Observable<ICardsProductInterface[]> = products$
  //   .pipe(
  // angular syntax
  // pluck('products')
  // standart syntax of js
  //     map((res)=> res.products)
  //   )

  constructor(
    @Inject(ProductService) private productsService:any

  ) {

  }
  ngOnInit(): void {
    this.appProducts$ = this.productsService.getProducts()
    this.appProducts$.subscribe((val) => console.log(val))
  }


  //search
  public searchInput(text :string):void{
    this.searchText = text
  }

  //checkbox
  public toggleOnlyFavorite(event: MatCheckboxChange){
    this.onlyFavorites = event.checked
  }
}
