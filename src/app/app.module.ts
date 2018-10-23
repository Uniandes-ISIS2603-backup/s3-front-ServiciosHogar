import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//----------------------------------
//Importar los modulos del proyecto.
//----------------------------------
import {CalificacionModule} from './calificacion/calificacion.module';
import {ClienteModule} from './cliente/cliente.module';
import {FacturaModule} from './factura/factura.module';
import {HabilidadModule} from './habilidad/habilidad.module';
import {HojaDeVidaModule} from './hoja-de-vida/hoja-de-vida.module';
import {PrestadorModule} from './prestador/prestador.module';
import {ReferenciaModule} from './referencia/referencia.module';
import {ServicioModule} from './servicio/servicio.module';
import {SolicitudModule} from './solicitud/solicitud.module';
import {TarjetaCreditoModule} from './tarjeta-credito/tarjeta-credito.module';
//----------------------------------

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    CalificacionModule,    ClienteModule,
    FacturaModule,    HabilidadModule,    HojaDeVidaModule,
    PrestadorModule,    ReferenciaModule,    ServicioModule,
    SolicitudModule,    TarjetaCreditoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
