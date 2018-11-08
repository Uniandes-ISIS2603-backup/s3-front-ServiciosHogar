import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';
import { SolicitudService } from './solicitud.service';
import { SolicitudDetailComponent } from './solicitud-detail/solicitud-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SolicitudServicioComponent } from './solicitud-servicios/solicitud-servicios.component';
import {SolicitudCreateComponent} from './solicitud-create/solicitud-create.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [SolicitudListComponent,
  SolicitudDetailComponent, SolicitudServicioComponent, SolicitudCreateComponent],
  providers: [SolicitudService],
  exports: [SolicitudListComponent]

})
export class SolicitudModule { }
