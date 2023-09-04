import {Component, OnInit} from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";
import {products$} from "../data";
import {Unsubscribe} from "./utils/unsubscribe";
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Unsubscribe implements OnInit{
  public products: ICardsProductInterface[] | undefined
  public appChangesToggleValue = false;
  public title = 'Angular_learnJS2020';

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

  // fore unsubscribe without pipe
  // ngOnInit(): void {
  //   products$
  //     .pipe(takeUntil(this.unSuUnsubscribe$))
  //     .subscribe((p) => {
  //     this.products = p
  //   })
  // }

}
