import { Injectable } from '@angular/core';
import {ViewerAccordionAbstract} from '../domains/viewer-accordion.abstract';

@Injectable({
  providedIn: 'root'
})
export class ViewerAccordionDefaultService extends ViewerAccordionAbstract {

  constructor() {
    super();
  }
}
