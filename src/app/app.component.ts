import {Component, OnInit} from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";
import { products$} from "../data";
import {Unsubscribe} from "./utils/unsubscribe";
import {Observable} from "rxjs";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Unsubscribe implements OnInit{

  //side-nav
  public appChangesToggleValue = false;

  public title = 'Angular_learnJS2020';

  // for pipe filter
  public searchText = ''
  public value = '';
  //// for pipe filter
  public onlyFavorites = false

  public appProducts$: Observable<ICardsProductInterface[]> = products$

  //with pipe async if we receive object
  // public appProducts$: Observable<ICardsProductInterface[]> = products$
  //   .pipe(
  // angular syntax
  // pluck('products')
  // standart syntax of js
  //     map((res)=> res.products)
  //   )



  public handleToggleChanges(isToggleValue: boolean){
    this.appChangesToggleValue = isToggleValue
  }

  public onClickLeftSideMenu(){
    console.log('click')
  }

  ngOnInit(): void {

  }

  //for pipe
  public searchInput(text :string):void{
    this.searchText = text
  }

  //checkbox
  public toggleOnlyFavorite(event: MatCheckboxChange){
    this.onlyFavorites = event.checked
  }
}
  // fore unsubscribe without pipe
  // ngOnInit(): void {
  //   products$
  //     .pipe(takeUntil(this.unSuUnsubscribe$))
  //     .subscribe((p) => {
  //     this.products = p
  //   })
  // }


