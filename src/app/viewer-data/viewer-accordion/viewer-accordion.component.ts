import {Component, forwardRef, Inject, InjectionToken, Input, OnInit, Optional} from '@angular/core';
import {ViewerAccordionAbstract, ViewerInterface} from '../domains/viewer-accordion.abstract';
import {ViewerAccordionDefaultService} from '../services/viewer-accordion-default.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'zt-viewer-accordion',
  providers: [ ViewerAccordionDefaultService],
  templateUrl: './viewer-accordion.component.html',
  styleUrls: ['./viewer-accordion.component.scss']
})
export class ViewerAccordionComponent implements OnInit {
  @Input() data: any = {};

  showContent$: Observable<any>;
  viewProvider: ViewerInterface;

  constructor( @Optional() private cpnService: ViewerAccordionAbstract,
               private defaultControlValueService: ViewerAccordionDefaultService) {
    this.viewProvider = this.getProvider();
    this.showContent$ = this.viewProvider.openEvent$;
  }

  ngOnInit() {}

  clickItem() {
    if (this.viewProvider.validOpen()) {
      this.viewProvider.toggleBlock();
    } else {
      this.viewProvider.deferClick();
    }
  }

  getProvider(): ViewerInterface {
    return this.cpnService || this.defaultControlValueService;
  }

}
