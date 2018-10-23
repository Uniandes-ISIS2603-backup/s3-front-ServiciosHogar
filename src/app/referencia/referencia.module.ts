import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenciaListComponent } from './referencia-list/referencia-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReferenciaListComponent],
  exports: [ReferenciaListComponent]
})
export class ReferenciaModule { }
