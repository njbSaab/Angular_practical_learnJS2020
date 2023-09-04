import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appChanges = false;
  public title = 'Angular_learnJS2020';

  public handleToggleChanges(isToggleValue: boolean){
    this.appChanges = isToggleValue
  }

}
