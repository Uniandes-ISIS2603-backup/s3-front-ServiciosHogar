import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { SharedModule } from './cliente-create/SharedModule';

import { ClienteTarjetaComponent } from './cliente-tarjetas/cliente-tarjeta.component';
import { ClienteAddTarjetaComponent } from './cliente-add-tarjeta/cliente-add-tarjeta.component';


import { ClienteSolicitudComponent } from '../cliente/cliente-solicitudes/cliente-solicitud.component';
import { SolicitudDetailComponent } from '../cliente/cliente-detail-solicitud/cliente-detail-solicitud.component';
import { SolicitudEditComponent } from '../cliente/cliente-edit-solicitud/cliente-edit-solicitud.component';
import { ClienteAddSolicitudComponent } from '../cliente/cliente-add-solicitud/cliente-add-solicitud.component';


import { ClienteService } from './cliente.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        ClienteListComponent, ClienteDetailComponent, ClienteEditComponent,
        ClienteTarjetaComponent, ClienteAddTarjetaComponent,
        ClienteSolicitudComponent, SolicitudDetailComponent, SolicitudEditComponent, ClienteAddSolicitudComponent
    ],
    providers: [ClienteService],
    exports: [ClienteListComponent, ClienteEditComponent, ClienteDetailComponent, SolicitudDetailComponent]
})
export class ClienteModule { }
