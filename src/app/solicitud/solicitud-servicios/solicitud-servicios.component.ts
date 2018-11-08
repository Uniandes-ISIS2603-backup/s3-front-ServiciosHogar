import { Component, OnInit, Input} from '@angular/core';
import { SolicitudService } from '../solicitud.service';
import { Servicio } from '../servicio';

@Component({
    selector: 'app-solicitud-servicios',
    templateUrl: './solicitud-servicios.component.html',
    styleUrls: ['./solicitud-servicios.component.css']
})
export class SolicitudServicioComponent implements OnInit {
    @Input() solicitudServicios: Servicio [];

    public isCollapsed = true;

    updateReviews(servicios: Servicio[]): void {
        this.solicitudServicios = servicios;
    }

    ngOnInit() {

    }
}



