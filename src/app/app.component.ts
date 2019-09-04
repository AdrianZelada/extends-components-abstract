import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'extends-components-abstract';
  ztviewer = {
    title: 'zt-viewer-accordion - click me!!!',
    paragraph: 'Componente Base .Con la funcionalidad de mostrar una descripcion,' +
      ' este elemento reacciona por defecto con un click en el titulo',
  };

  button = {
    title: 'app-viewer-button - click en el Button',
    paragraph: 'Extiende comportamiento del Componente Base (zt-viewer-accordion) y modifica el flujo' +
      'de mostrar la información, asiendo que solo al hacer click en el button muestre la información' +
      'y anula la acción de mostrar la descripción al hacer click en el Título.'
  };

  popup = {
    title: 'app-viewer-popup - click me!!!',
    paragraph: 'Extiende comportamiento del Componente Base (zt-viewer-accordion) y modifica el flujo' +
      'de mostrar la información, asiendo en el Título muestra la información en un alert.'
  };

  hover = {
    title: 'app-viewer-hover - mouse enter!!!',
    paragraph: 'Extiende comportamiento del Componente Base (zt-viewer-accordion) y modifica el flujo' +
      'de mostrar la información, cuando el mouse se encuentra sobre este componente se mostrara la ' +
      'descripción y cuando el mouse sale del componente la descripción se ocultara.'
  };

  secret = {
    title: 'app-viewer-secret - ingresa la palabra secreta y hazme click!!!',
    paragraph: 'Extiende comportamiento del Componente Base (zt-viewer-accordion) y modifica el flujo' +
      'de mostrar la información, valida si la palabra ingresada es la clave para mostrar si lo es  muestra' +
      'la información en caso contrario muestra un mensaje de error'
  };
}
