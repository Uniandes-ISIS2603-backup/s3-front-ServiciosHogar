import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SolicitudListComponent} from './solicitud-list/solicitud-list.component';
import {SolicitudServicioComponent} from './solicitud-servicios/solicitud-servicio.component';
import {SolicitudCreateComponent} from './solicitud-create/solicitud-create.component';
import {SolicitudDetailComponent} from './solicitud-detail/solicitud-detail.component';
import {SolicitudAddServicioComponent} from './solicitud-add-servicio/solicitud-add-servicio.component';
import {SolicitudEditComponent} from './solicitud-edit/solicitud-edit.component';

import {SolicitudService} from './solicitud.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        SolicitudListComponent, SolicitudDetailComponent,
        SolicitudServicioComponent, SolicitudCreateComponent,
        SolicitudAddServicioComponent, SolicitudEditComponent
    ],
    providers: [SolicitudService],
    exports: [SolicitudListComponent, SolicitudEditComponent]
})
export class SolicitudModule {}
