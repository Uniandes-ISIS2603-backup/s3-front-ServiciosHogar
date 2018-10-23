import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadorListComponent } from './prestador-list/prestador-list.component';
import {PrestadorService} from './prestador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestadorListComponent],
  providers: [PrestadorService],
  exports: [PrestadorListComponent]
})
export class PrestadorModule { }
