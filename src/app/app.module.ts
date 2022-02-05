import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ExamplesComponent } from './examples/examples.component';
import { FullNameComponent } from './full-name/full-name.component';
import { CurrencyComponent } from './currency/currency.component';
import { RegionComponent } from './region/region.component';
import { Error404Component } from './error404/error404.component';
import { MostrarPaisComponent } from './mostrar-pais/mostrar-pais.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { HttpClientModule } from '@angular/common/http';
import { RestcountriesService } from './restcountries.service';
import { LengPPipe } from './leng-p.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExamplesComponent,
    FullNameComponent,
    CurrencyComponent,
    RegionComponent,
    Error404Component,
    MostrarPaisComponent,
    ResultadoComponent,
    LengPPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestcountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
