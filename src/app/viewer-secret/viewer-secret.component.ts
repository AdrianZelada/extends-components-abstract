import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ViewerAccordionAbstract} from '../viewer-data/domains/viewer-accordion.abstract';

@Component({
  selector: 'app-viewer-secret',
  templateUrl: './viewer-secret.component.html',
  styleUrls: ['./viewer-secret.component.scss'],
  viewProviders: [
    {
      provide: ViewerAccordionAbstract,
      useExisting: forwardRef(() => ViewerSecretComponent)
    }
  ]
})
export class ViewerSecretComponent extends ViewerAccordionAbstract implements OnInit {
  @Input() data: any = {};
  @Input() key: any = 'sample';
  secret: string = '';
  showError: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  validOpen() {
    return this.secret == this.key;
  }

  deferClick() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 2000);
  }

}
