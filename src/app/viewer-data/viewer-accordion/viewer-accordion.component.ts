import {Component, Input, OnInit, Optional} from '@angular/core';
import {ViewerAccordionAbstract} from '../domains/viewer-accordion.abstract';
import {ViewerAccordionDefaultService} from '../services/viewer-accordion-default.service';
import {Observable} from 'rxjs';

/**
 * ViewerAccordionComponent*
 *
 */
@Component({
  selector: 'zt-viewer-accordion',
  providers: [ ViewerAccordionDefaultService],
  templateUrl: './viewer-accordion.component.html',
  styleUrls: ['./viewer-accordion.component.scss']
})
export class ViewerAccordionComponent implements OnInit {
  @Input() data: any = {};

  /**
   * Observable encargado de escuchar los cambios que se emitiran para la visualizacion de el contenido
   */
  showContent$: Observable<any>;
  /**
   * variable que tendra el provider que se utilizará
   */
  viewProvider: ViewerAccordionAbstract;

  /**
   *
   * Component que puede cambiar su funcionalidad si un component HOST provee a este component algun
   * provider de tipo ViewerAccordionAbstract
   *
   * En caso de que no tengamos un provider de parte del component HOST entonces se tomará por defecto
   * el provider ViewerAccordionDefaultService que hara que el component actue de manera normal
   *
   */

  constructor( @Optional() private cpnService: ViewerAccordionAbstract,
               private defaultControlValueService: ViewerAccordionDefaultService) {
    this.viewProvider = this.getProvider();
    this.showContent$ = this.viewProvider.openEvent$;
  }

  ngOnInit() {}

  /**
   * Implementamos una validacion preguntando a el provider si es valido mostrar la información.
   * si en caso de que sea valido se mostrara la información de forma habitual
   * en caso de que sea invalido no se mostrara la informacion y se ejectura una funcion
   */
  clickItem() {
    if (this.viewProvider.validOpen()) {
      this.viewProvider.toggleBlock();
    } else {
      this.viewProvider.deferClick();
    }
  }

  /**
   * Selecciona el provider con que se trabajara
   */
  getProvider(): ViewerAccordionAbstract {
    return this.cpnService || this.defaultControlValueService;
  }

}
