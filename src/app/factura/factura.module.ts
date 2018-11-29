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
import {FacturaDetailComponent} from './factura-detail/factura-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [FacturaListComponent, FacturaCreateComponent, FacturaEditComponent, FacturaDetailComponent],
    providers: [FacturaService]
})
export class FacturaModule {}
