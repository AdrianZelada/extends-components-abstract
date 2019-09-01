import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ViewerAccordionAbstract} from '../viewer-data/domains/viewer-accordion.abstract';

@Component({
  selector: 'app-viewer-popup',
  templateUrl: './viewer-popup.component.html',
  styleUrls: ['./viewer-popup.component.scss'],
  viewProviders: [
    {
      provide: ViewerAccordionAbstract,
      useExisting: forwardRef(() => ViewerPopupComponent)
    }
  ]
})
export class ViewerPopupComponent extends ViewerAccordionAbstract implements OnInit {
  @Input() data: any = {};

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  validOpen() {
    return false;
  }

  deferClick() {
    alert(this.data.title);
  }

}
