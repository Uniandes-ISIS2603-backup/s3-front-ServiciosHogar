import {Component, OnInit} from '@angular/core';

import {Solicitud} from '../solicitud';
import {SolicitudService} from '../solicitud.service';

/**
* The component for the list of solicitudes in the ServiciosHogar
*/
@Component({
    selector: 'app-solicitud',
    templateUrl: './solicitud-list.component.html',
    styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitud's services provider
    */
    constructor(
        private solicitudService: SolicitudService,
    ) {}

    /**
    * The list of solicitudes which belong to the ServiciosHogar
    */
    solicitudes: Solicitud[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the solicitud being edited.
     */
    solicitud_edit_id: number;

    /**
    * Asks the service to update the list of solicitudes
    */
    getSolicitudes(): void {
        this.solicitudService.getSolicitudes()
            .subscribe(solicitudes => {
                this.solicitudes = solicitudes;
            });
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(solicitud_id: number): void {
        if (!this.showEdit || (this.showEdit && solicitud_id != this.solicitud_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.solicitud_edit_id = solicitud_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateSolicitud(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of solicitudes from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getSolicitudes();
    }
}


