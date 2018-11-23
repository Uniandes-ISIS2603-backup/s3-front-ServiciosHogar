import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {PrestadorListComponent} from './prestador-list/prestador-list.component';
import {PrestadorService} from './prestador.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {PrestadorDetailComponent} from './prestador-detail/prestador-detail.component';
import {PrestadorCreateComponent} from './prestador-create/prestador-create.component';
import {PrestadorEditComponent} from './prestador-edit/prestador-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [PrestadorListComponent, PrestadorDetailComponent, PrestadorCreateComponent, PrestadorEditComponent],
    providers: [PrestadorService]
})
export class PrestadorModule {}
