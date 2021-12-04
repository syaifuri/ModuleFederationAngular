import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  IgxButtonModule,
  IgxIconModule,
  IgxDialogModule,
  IgxRippleModule,
  IgxNavbarModule,
  IgxCardModule,
} from '@infragistics/igniteui-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxDialogModule,
    IgxNavbarModule,
    IgxCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
