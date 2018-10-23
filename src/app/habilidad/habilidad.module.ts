import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadListComponent } from './habilidad-list/habilidad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HabilidadListComponent],
  exports: [HabilidadListComponent]
})
export class HabilidadModule { }
