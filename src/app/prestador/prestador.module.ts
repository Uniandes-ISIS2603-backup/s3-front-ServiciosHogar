import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrestadorListComponent } from './prestador-list/prestador-list.component';
import {PrestadorService} from './prestador.service';
import {PrestadorDetailComponent} from './prestador-detail/prestador-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
    declarations: [PrestadorListComponent, PrestadorDetailComponent],
  providers: [PrestadorService],
    exports: [PrestadorListComponent, PrestadorDetailComponent]
})
export class PrestadorModule { }
