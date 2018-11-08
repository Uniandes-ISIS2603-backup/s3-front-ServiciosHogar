import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {SolicitudService} from '../solicitud.service';
import {Solicitud} from '../solicitud';

@Component({
    selector: 'app-solicitud-create',
    templateUrl: './solicitud-create.component.html',
    styleUrls: ['./solicitud-create.component.css'],
    providers: [DatePipe]
})
export class SolicitudCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitudes' services provider
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private solicitudService: SolicitudService,
        private router: Router
    ) {}

    /**
    * The new solicitud
    */
    solicitud: Solicitud;

    /**
    * Cancels the creation of the new solicitud
    * Redirects to the solicitudes' list page
    */
    cancelCreation(): void {
        this.router.navigate(['/solicitudes/list']);
    }

    /**
    * Creates a new solicitud
    */
    createSolicitud(): Solicitud {
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe(solicitud => {
                this.solicitud.id = solicitud.id;
                this.router.navigate(['/solicitudes/' + solicitud.id]);
            }, err => {
            });
        return this.solicitud;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.solicitud = new Solicitud();
    }

}
