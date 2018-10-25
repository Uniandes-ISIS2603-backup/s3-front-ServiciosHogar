import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudService } from './solicitud.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitudListComponent],
  exports: [SolicitudListComponent]
  
})
export class SolicitudModule { }
