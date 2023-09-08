import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()

export class ModalService {

  public control$ = new Subject()
  constructor() { }

  public open(data: any):void{
    this.control$.next(data)
  }
  public close():void{
    this.control$.next(null)
  }
  public get modalSequence():Observable<any>{
    return this.control$.asObservable()
  }
}
