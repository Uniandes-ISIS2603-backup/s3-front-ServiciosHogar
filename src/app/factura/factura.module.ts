import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaListComponent],
  exports: [FacturaListComponent]
  
})
export class FacturaModule { }
