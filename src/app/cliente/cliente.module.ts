import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {ClienteTarjetaComponent} from './cliente-tarjetas/cliente-tarjeta.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteAddTarjetaComponent} from './cliente-add-tarjeta/cliente-add-tarjeta.component';
import {ClienteEditComponent} from './cliente-edit/cliente-edit.component';

import {ClienteService} from './cliente.service';

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
        ClienteListComponent, ClienteDetailComponent, ClienteTarjetaComponent, ClienteCreateComponent, ClienteAddTarjetaComponent, ClienteEditComponent
    ],
    providers: [ClienteService],
    exports: [ClienteListComponent, ClienteEditComponent]
})
export class ClienteModule {}
