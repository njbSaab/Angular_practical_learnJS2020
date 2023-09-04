import {Component, OnInit} from '@angular/core';
import {ICardsProductInterface} from "../shared/intarfaces/cards-product.interface";
import {products, products$} from "../data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: ICardsProductInterface[] | undefined
  public appChangesToggleValue = false;
  public title = 'Angular_learnJS2020';

  public handleToggleChanges(isToggleValue: boolean){
    this.appChangesToggleValue = isToggleValue
  }

  public onClickLeftSideMenu(){
    console.log('click')
  }

  ngOnInit(): void {
    products$.subscribe((p) => {
      this.products = p
    })
  }
}
