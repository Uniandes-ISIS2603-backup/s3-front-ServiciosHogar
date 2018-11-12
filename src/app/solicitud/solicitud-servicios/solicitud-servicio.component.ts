import { Component, OnInit, Input, } from '@angular/core';
import { Servicio } from '../servicio';

@Component({
    selector: 'app-solicitud-servicios',
    templateUrl: './solicitud-servicio.component.html',
})
export class SolicitudServicioComponent implements OnInit {
    @Input() solicitudServicios: Servicio [];

    public isCollapsed = true;

    /**
     * The function called when a servicio is posted to update the servicios
     */
    updateServicios(servicios:Servicio[]): void {
        this.solicitudServicios = servicios;
    }

    ngOnInit(){
    }
}



