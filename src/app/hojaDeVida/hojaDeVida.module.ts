import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {HojaDeVidaListComponent} from './hojaDeVida-list/hojaDeVida-list.component';
import {HojaDeVidaService} from './hojaDeVida.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HojaDeVidaCreateComponent} from './hojaDeVida-create/hojaDeVida-create.component';
import {HojaDeVidaEditComponent} from './hojaDeVida-edit/hojaDeVida-edit.component';
import {PrestadorModule} from '../prestador/prestador.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        PrestadorModule
    ],
    declarations: [HojaDeVidaListComponent, HojaDeVidaCreateComponent, HojaDeVidaEditComponent],
    providers: [HojaDeVidaService]
})
export class HojaDeVidaModule {}
