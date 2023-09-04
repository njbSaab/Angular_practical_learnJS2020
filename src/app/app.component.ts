import {Component, OnInit} from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";
import {products$} from "../data";
import {Unsubscribe} from "./utils/unsubscribe";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Unsubscribe implements OnInit{

  //side-nav
  public appChangesToggleValue = false;

  public title = 'Angular_learnJS2020';

  // for pipe
  public searchText = ''
  public value = '';
  //// for pipe

  //with pipe async
  public appProducts$: Observable<ICardsProductInterface[]> = products$;


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

}
  // fore unsubscribe without pipe
  // ngOnInit(): void {
  //   products$
  //     .pipe(takeUntil(this.unSuUnsubscribe$))
  //     .subscribe((p) => {
  //     this.products = p
  //   })
  // }


