import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing/app-routing.module';

// ----------------------------------
// Importar los modulos del proyecto.
// ----------------------------------
import {CalificacionModule} from './calificacion/calificacion.module';
import {ClienteModule} from './cliente/cliente.module';
import {FacturaModule} from './factura/factura.module';
import {HojaDeVidaModule} from './hoja-de-vida/hoja-de-vida.module';
import {PrestadorModule} from './prestador/prestador.module';
import {ReferenciaModule} from './referencia/referencia.module';
import {ServicioModule} from './servicio/servicio.module';
import {SolicitudModule} from './solicitud/solicitud.module';
import {TarjetaCreditoModule} from './tarjeta-credito/tarjeta-credito.module';
// ----------------------------------

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    CalificacionModule,   ClienteModule,
    FacturaModule,     HojaDeVidaModule,
    PrestadorModule,  ReferenciaModule,     ServicioModule,
    SolicitudModule,  TarjetaCreditoModule, AppRoutingModule,
    HttpClientModule, FormsModule, NgbModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
