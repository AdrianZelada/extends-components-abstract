import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerAccordionComponent} from './viewer-accordion/viewer-accordion.component';

@NgModule({
  declarations: [ViewerAccordionComponent],
  exports: [ViewerAccordionComponent],
  imports: [
    CommonModule
  ]
})
export class ViewerDataModule { }
