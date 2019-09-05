import {Component, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ViewerAccordionAbstract} from '../viewer-data/domains/viewer-accordion.abstract';

@Component({
  selector: 'app-viewer-hover',
  template: `<div class="row">
                <div class="col-12 ">
                  <zt-viewer-accordion [data]="data"></zt-viewer-accordion>
                </div>
              </div>`,
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

  /**
   * Escuchamos los eventos del mouse en nuestro component y segun ejecutamos
   * la funcion que corresponda al evento que se dispara.
   *
   * mouseenter : Muestra la Información.
   *
   * mouseleave : Oculta la Información.
   * */
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

  /**
   * Modificamos la funcionalidad para no mostrar la información haciendo click en el título.
   */
  validOpen() {
    return false;
  }

  deferClick() {
  }

}
