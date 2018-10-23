import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabilidadListComponent } from './habilidad-list/habilidad-list.component';
import {HabilidadService} from './habilidad.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HabilidadListComponent],
  providers: [HabilidadService],
  exports: [HabilidadListComponent]
})
export class HabilidadModule { }
