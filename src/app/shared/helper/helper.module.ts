import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartComponent } from './chart/chart.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    declarations: [
        ChartComponent,
        ConsultaComponent
    ],
    exports: [
        ChartComponent,
        ConsultaComponent
    ],
    imports: [
        MDBBootstrapModule,
        NgxPaginationModule,
        CommonModule
    ]
})
export class HelperModule { }
