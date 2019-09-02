import {Input, Output} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export abstract class ViewerAccordionAbstract implements ViewerInterface{
  openEvent: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  openEvent$: Observable<any> = this.openEvent.asObservable();
  openBlock() {
    this.openEvent.next(true);
  }
  closeBlock() {
    this.openEvent.next(false);
  }
  toggleBlock(): void {
    const val = this.openEvent.value;
    this.openEvent.next(!val);
  }
  validOpen(): boolean {
    return true;
  }

  deferClick(): void {
  }
}


export interface ViewerInterface {
  openEvent$: Observable<any>;
  openBlock(): void;
  closeBlock(): void;
  toggleBlock(): void;
  validOpen(): boolean;
  deferClick(): void;
}
