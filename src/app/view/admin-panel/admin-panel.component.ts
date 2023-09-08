import {Component, OnInit} from '@angular/core';
import {Unsubscribe} from "../../utils/unsubscribe";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent extends Unsubscribe implements OnInit {
  public appChangesToggleValue = false
  public title = 'Angular_learnJS2020';

  public handleToggleChanges(isToggleValue: boolean){
    this.appChangesToggleValue = isToggleValue
  }

  public onClickLeftSideMenu(){
    console.log('click')
  }

  ngOnInit(): void {
  }




}
// // fore unsubscribe without pipe
// // ngOnInit(): void {
// //   products$
// //     .pipe(takeUntil(this.unSuUnsubscribe$))
// //     .subscribe((p) => {
// //     this.products = p
// //   })
// // }
