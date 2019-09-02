import {Component, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ViewerAccordionAbstract} from '../viewer-data/domains/viewer-accordion.abstract';

@Component({
  selector: 'app-viewer-hover',
  templateUrl: './viewer-hover.component.html',
  styleUrls: ['./viewer-hover.component.scss'],
  viewProviders: [
    {
      provide: ViewerAccordionAbstract,
      useExisting: forwardRef(() => ViewerHoverComponent)
    }
  ]
})
export class ViewerHoverComponent extends ViewerAccordionAbstract implements OnInit {
  @Input() data: any = {};
  @HostListener('mouseenter', ['$event.target'])
  onEnter() {
    this.openBlock();
  }
  @HostListener('mouseleave', ['$event.target'])
  onLeave() {
    this.closeBlock();
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }

  validOpen() {
    return false;
  }

}
