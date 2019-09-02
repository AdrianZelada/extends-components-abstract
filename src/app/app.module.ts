import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ViewerDataModule} from './viewer-data/viewer-data.module';
import { ViewerPopupComponent } from './viewer-popup/viewer-popup.component';
import { ViewerButtonComponent } from './viewer-button/viewer-button.component';
import { ViewerHoverComponent } from './viewer-hover/viewer-hover.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerPopupComponent,
    ViewerButtonComponent,
    ViewerHoverComponent
  ],
  imports: [
    BrowserModule,
    ViewerDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
