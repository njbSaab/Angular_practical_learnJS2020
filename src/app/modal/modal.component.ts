import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { ModalService } from "./modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', { read: ViewContainerRef })
  private modalContent!: ViewContainerRef;

  public product = this.modalService.control$;

  public isOpen = false;

  public content: any;

  public componentRef: ComponentRef<any> | null = null;

  constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.modalService.modalSequence.subscribe((data) => {
      if (!data) {
        this.isOpen = false;
        this.close();
        return;
      }
      this.isOpen = true;
      const componentFactory = this.cfr.resolveComponentFactory(data.component);
      this.componentRef = componentFactory.create(this.modalContent.injector);
      this.modalContent.insert(this.componentRef.hostView);
    });
  }

  public close() {
    this.isOpen = false;
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
