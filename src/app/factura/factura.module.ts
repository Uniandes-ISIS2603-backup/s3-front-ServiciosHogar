import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import {FacturaService} from './factura.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaListComponent],
  providers: [FacturaService],
  exports: [FacturaListComponent]
  
})
export class FacturaModule { }
