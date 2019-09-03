import {BehaviorSubject, Observable} from 'rxjs';

export abstract class ViewerAccordionAbstract implements ViewerInterface {
  /**
   * openEvent: Canal de comunicación con el componente Base
   */
  private openEvent: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  openEvent$: Observable<any> = this.openEvent.asObservable();

  /**
   * Metodos emisores del cambio de estado para la visualización de la Descripción
   */

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

  /**
   * Metodos abstractos que deberan ser implementados obligatoriamente en las sub-clases
   * donde esta Clase este siendo extendidad
   */

  /**
   * Valida si debe visualizar la descripción
  */
  abstract validOpen(): boolean;

  /**
   * En caso que la validación sea invalida se ejecutará esta función
   */
  abstract deferClick();
}


export interface ViewerInterface {
  openBlock(): void;
  closeBlock(): void;
  toggleBlock(): void;
  validOpen(): boolean;
  deferClick(): void;
}
