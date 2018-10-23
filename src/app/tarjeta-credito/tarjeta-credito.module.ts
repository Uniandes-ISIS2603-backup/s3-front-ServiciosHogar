import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoListComponent } from './tarjeta-credito-list/tarjeta-credito-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TarjetaCreditoListComponent],
  exports: [TarjetaCreditoListComponent]
})
export class TarjetaCreditoModule { }
