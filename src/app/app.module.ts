import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';

import {AppComponent} from './app.component';
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
import {SolicitudModule} from './solicitud/solicitud.module';
import {TarjetaCreditoModule} from './tarjeta-credito/tarjeta-credito.module';
// ----------------------------------

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }),
    NgxPaginationModule,
    NgxPermissionsModule.forRoot(),
    NgbModule,

    CalificacionModule,
    ClienteModule,
    FacturaModule,
    HojaDeVidaModule,
    PrestadorModule,
    ReferenciaModule,
    SolicitudModule,
    TarjetaCreditoModule,
],

  bootstrap: [AppComponent],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
    }
]
})
export class AppModule { }
