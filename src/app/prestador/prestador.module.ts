import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestadorListComponent } from './prestador-list/prestador-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrestadorListComponent],
  exports: [PrestadorListComponent]
})
export class PrestadorModule { }
