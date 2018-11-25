import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {FacturaListComponent} from './factura-list/factura-list.component';
import {FacturaService} from './factura.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {FacturaCreateComponent} from './factura-create/factura-create.component';
import {FacturaEditComponent} from './factura-edit/factura-edit.component';
import {SolicitudModule} from '../solicitud/solicitud.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        SolicitudModule
    ],
    declarations: [FacturaListComponent, FacturaCreateComponent, FacturaEditComponent],
    providers: [FacturaService]
})
export class FacturaModule {}
