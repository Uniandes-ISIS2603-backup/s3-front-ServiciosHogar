import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HojaDeVidaListComponent } from './hoja-de-vida-list/hoja-de-vida-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HojaDeVidaListComponent],
  exports: [HojaDeVidaListComponent]
})
export class HojaDeVidaModule { }
