import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './shared/helper/chart/chart.component';
import { ConsultaComponent } from './shared/helper/consulta/consulta.component';


const routes: Routes = [
  {
    path: 'acesso',
    loadChildren: () =>
      import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(mod => mod.HomeModule),
  },
  {path: 'coaching', component: ChartComponent},
  {path: 'consulta', component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
