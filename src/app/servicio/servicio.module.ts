import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ServicioListComponent} from './servicio-list/servicio-list.component';
import {ServicioService} from './servicio.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ServicioDetailComponent} from './servicio-detail/servicio-detail.component';
import {ServicioCreateComponent} from './servicio-create/servicio-create.component';
import {ServicioEditComponent} from './servicio-edit/servicio-edit.component';
import {PrestadorModule} from '../prestador/prestador.module';
import {ServicioCalificacionComponent} from './servicio-calificacion/servicio-calificacion.component';
import {ServicioAddCalificacionComponent} from './servicio-add-calificacion/servicio-add-calificacion.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        PrestadorModule
    ],
    declarations: [ServicioListComponent, ServicioDetailComponent, ServicioCreateComponent, ServicioEditComponent, ServicioCalificacionComponent, ServicioAddCalificacionComponent],
    providers: [ServicioService]
})
export class ServicioModule {}
