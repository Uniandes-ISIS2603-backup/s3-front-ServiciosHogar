import {Component, OnInit} from '@angular/core';

import {Servicio} from '../servicio';
import {ServicioService} from '../servicio.service';

/**
* The component for the list of servicios in the PrestadorStore
*/
@Component({
    selector: 'app-servicio',
    templateUrl: './servicio-list.component.html',
    styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param servicioService The solicitud's services provider
    */
    constructor(
        private servicioService: ServicioService,
    ) {}

    /**
    * The list of servicios which belong to the PrestadorStore
    */
    servicios: Servicio[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the servicio being edited.
     */
    servicio_edit_id: number;

    /**
    * Asks the service to update the list of servicios
    */
    getServicios(): void {
        this.servicioService.getServicios()
            .subscribe(servicios => {
                this.servicios = servicios;
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
    showHideEdit(servicio_id: number): void {
        if (!this.showEdit || (this.showEdit && servicio_id != this.servicio_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.servicio_edit_id = servicio_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateServicio(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of servicios from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getServicios();
    }
}


