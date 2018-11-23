import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {SolicitudService} from '../solicitud.service';

import {Solicitud} from '../solicitud';

@Component({
    selector: 'app-solicitud-create',
    templateUrl: './solicitud-create.component.html',
    styleUrls: ['./solicitud-create.component.css']
})
export class SolicitudCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitudes' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new solicitud
    */
    solicitud: Solicitud;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an solicitud
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new solicitud
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new solicitud
    */
    createSolicitud(): Solicitud {
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe((solicitud) => {
                this.solicitud = solicitud;
                this.create.emit();
                this.toastrService.success("The solicitud was created", "Solicitud creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.solicitud;
    }

    /**
    * Informs the parent component that the user no longer wants to create an solicitud
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.solicitud = new Solicitud();
    }
}
