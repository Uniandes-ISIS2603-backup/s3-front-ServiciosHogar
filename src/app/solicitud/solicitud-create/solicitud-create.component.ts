import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitud.service';


@Component({
    selector: 'app-solicitud-create',
    templateUrl: './solicitud-create.component.html',
    styleUrls: ['./solicitud-create.component.css'],
    providers : [DatePipe]
})
export class SolicitudCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitud's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private solicitudService: SolicitudService
    ) { }

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
    * Creates an solicitud
    */
    createSolicitud(): Solicitud {
        console.log(this.solicitud);
        this.solicitudService.createSolicitud(this.solicitud)
            .subscribe((solicitud) => {
                this.solicitud = solicitud;
                this.create.emit();

            });
            return this.solicitud;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
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
