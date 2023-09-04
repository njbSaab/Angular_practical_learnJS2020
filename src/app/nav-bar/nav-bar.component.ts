import {Component, ContentChild, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  @Input()
  public toggleValue = false;

  @ViewChild('contentBlock', {static: true, read: ViewContainerRef})
  public block!: ViewContainerRef

  @ContentChild('contentTemplate', {static: true})
  public contentTMPL!: TemplateRef<any>


  ngOnInit(): void {
    this.block.createEmbeddedView(this.contentTMPL)
  }

}
