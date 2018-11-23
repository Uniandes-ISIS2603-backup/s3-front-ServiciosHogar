import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {SolicitudListComponent} from './solicitud-list/solicitud-list.component';
import {SolicitudService} from './solicitud.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {SolicitudDetailComponent} from './solicitud-detail/solicitud-detail.component';
import {SolicitudCreateComponent} from './solicitud-create/solicitud-create.component';
import {SolicitudEditComponent} from './solicitud-edit/solicitud-edit.component';
import {ServicioModule} from '../servicio/servicio.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ServicioModule
    ],
    declarations: [SolicitudListComponent, SolicitudDetailComponent, SolicitudCreateComponent, SolicitudEditComponent],
    providers: [SolicitudService]
})
export class SolicitudModule {}
