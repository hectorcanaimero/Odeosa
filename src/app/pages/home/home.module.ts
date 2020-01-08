import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HelperModule } from '../../shared/helper/helper.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    MDBBootstrapModule,
    CommonModule,
    HelperModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
