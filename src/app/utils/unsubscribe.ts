import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class Unsubscribe implements OnDestroy{

  public unSuUnsubscribe$ = new Subject()
  ngOnDestroy(): void {
    this.unSuUnsubscribe$.next(undefined);
    this.unSuUnsubscribe$.complete()
  }

}

