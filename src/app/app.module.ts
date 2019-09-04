import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ViewerDataModule} from './viewer-data/viewer-data.module';
import { ViewerPopupComponent } from './viewer-popup/viewer-popup.component';
import { ViewerButtonComponent } from './viewer-button/viewer-button.component';
import { ViewerHoverComponent } from './viewer-hover/viewer-hover.component';
import { ViewerSecretComponent } from './viewer-secret/viewer-secret.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewerPopupComponent,
    ViewerButtonComponent,
    ViewerHoverComponent,
    ViewerSecretComponent
  ],
  imports: [
    BrowserModule,
    ViewerDataModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
