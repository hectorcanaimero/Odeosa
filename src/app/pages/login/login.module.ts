import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    LoginRoutingModule,
    MDBBootstrapModule
  ]
})
export class LoginModule { }
