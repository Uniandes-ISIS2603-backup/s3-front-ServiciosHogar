import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { PrestadorListComponent } from './prestador-list/prestador-list.component';
import { PrestadorCreateComponent } from './prestador-create/prestador-create.component';
import { PrestadorDetailComponent } from './prestador-detail/prestador-detail.component';
import { PrestadorEditComponent } from './prestador-edit/prestador-edit.component';

import { PrestadorService } from './prestador.service';

import { AuthModule } from '../auth/auth.module';
import { PrestadorHojaDeVidaComponent } from './prestador-hojaDeVida/prestador-hojaDeVida.component';
import { PrestadorAddHojaDeVidaComponent } from './prestador-add-hojaDeVida/prestador-add-hojaDeVida.component';
import { PrestadorEditHojaDeVidaComponent } from './prestador-edit-hoja-de-vida/prestador-edit-hoja-de-vida.component';


@NgModule({
    imports: [
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        PrestadorListComponent, PrestadorDetailComponent, PrestadorCreateComponent, PrestadorEditComponent, PrestadorHojaDeVidaComponent, PrestadorAddHojaDeVidaComponent, PrestadorEditHojaDeVidaComponent
    ],
    providers: [PrestadorService],
    exports: [PrestadorListComponent, PrestadorEditComponent, PrestadorEditComponent, PrestadorHojaDeVidaComponent, PrestadorAddHojaDeVidaComponent]
})
export class PrestadorModule { }
