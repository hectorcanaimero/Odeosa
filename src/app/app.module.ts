import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HelperModule } from './shared/helper/helper.module';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HelperModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
