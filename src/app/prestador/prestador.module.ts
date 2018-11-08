import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { PrestadorListComponent } from './prestador-list/prestador-list.component';
import {PrestadorService} from './prestador.service';
import {PrestadorDetailComponent} from './prestador-detail/prestador-detail.component';
import {PrestadorAddHabilidadComponent} from './prestador-add-habilidad/prestador-add-habilidad.component';
import {PrestadorHabilidadComponent} from './prestador-habilidades/prestador-habilidades.component';
import {PrestadorCreateComponent} from './prestador-create/prestador-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
    declarations: [PrestadorListComponent, PrestadorDetailComponent, PrestadorHabilidadComponent, PrestadorAddHabilidadComponent, PrestadorCreateComponent],
  providers: [PrestadorService],
    exports: [PrestadorListComponent, PrestadorDetailComponent, PrestadorAddHabilidadComponent, PrestadorHabilidadComponent, PrestadorCreateComponent]
})
export class PrestadorModule { }
