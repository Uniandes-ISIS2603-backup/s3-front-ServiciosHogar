import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';*/
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalificacionModule,   ClienteModule,
    FacturaModule,    HojaDeVidaModule,
    PrestadorModule,  ReferenciaModule,     ServicioModule,
    SolicitudModule,  TarjetaCreditoModule,
    FormsModule,
    ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }),
    BrowserAnimationsModule,
   /*NgxPaginationModule,
    NgbModule,
    ModalDialogModule,
    AngularFontAwesomeModule,*/
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
