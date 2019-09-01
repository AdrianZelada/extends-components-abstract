import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ViewerAccordionAbstract} from '../viewer-data/domains/viewer-accordion.abstract';

@Component({
  selector: 'app-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.scss'],
  viewProviders: [
    {
      provide: ViewerAccordionAbstract,
      useExisting: forwardRef(() => ViewerButtonComponent)
    }
  ]
})
export class ViewerButtonComponent extends ViewerAccordionAbstract implements OnInit {
  @Input() data: any = {};

  constructor() {
    super();
  }

  ngOnInit() {
  }

  open(): void {
    this.toggleBlock();
  }

  validOpen() {
    return false;
  }

}
