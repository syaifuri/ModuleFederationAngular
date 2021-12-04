import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { App01Component } from './app01/app01.component';
import { App02Component } from './app02/app02.component';

@NgModule({
  declarations: [AppComponent, App01Component, App02Component],
  imports: [
    BrowserModule,
    HttpClientModule,
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
