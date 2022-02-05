import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { Error404Component } from './error404/error404.component';
import { FullNameComponent } from './full-name/full-name.component';
import { MostrarPaisComponent } from './mostrar-pais/mostrar-pais.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  {
    path: '', component: FullNameComponent
  },
  {
    path: 'currency', component: CurrencyComponent
  },
  {
    path: 'region', component: RegionComponent
  },
  {
    path: 'mostrarPais', component: MostrarPaisComponent
  },
  {
    path: 'mostrarPais/:countrie', component: MostrarPaisComponent
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
