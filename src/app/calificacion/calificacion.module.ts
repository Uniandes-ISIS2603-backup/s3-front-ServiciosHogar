import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionListComponent } from './calificacion-list/calificacion-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionListComponent],
  exports: [CalificacionListComponent]
})
export class CalificacionModule { }
