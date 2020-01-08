import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChartComponent } from '../../shared/helper/chart/chart.component';
import { ConsultaComponent } from '../../shared/helper/consulta/consulta.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
