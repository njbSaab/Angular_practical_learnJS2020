import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output()
  public toggleChangeValue = new EventEmitter<boolean>()

  @Input()
  public headerTitle = ''

  public isToggleValue = false
  public toggleNavBar(){
    this.isToggleValue = !this.isToggleValue
    this.toggleChangeValue.emit(this.isToggleValue)
  }

}
