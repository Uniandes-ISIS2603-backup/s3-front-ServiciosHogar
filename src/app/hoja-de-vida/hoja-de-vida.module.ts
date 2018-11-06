import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HojaDeVidaListComponent } from './hoja-de-vida-list/hoja-de-vida-list.component';
import {HojaDeVidaService} from './hoja-de-vida.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HojaDeVidaListComponent],
   providers: [HojaDeVidaService],
  exports: [HojaDeVidaListComponent]
})
export class HojaDeVidaModule { }
