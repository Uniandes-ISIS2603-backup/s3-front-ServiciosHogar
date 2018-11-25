import {Component, OnInit} from '@angular/core';

import {Prestador} from '../prestador';
import {PrestadorService} from '../prestador.service';

/**
* The component for the list of prestadores in the ServiciosHogar
*/
@Component({
    selector: 'app-prestador',
    templateUrl: './prestador-list.component.html',
    styleUrls: ['./prestador-list.component.css']
})
export class PrestadorListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param prestadorService The solicitud's services provider
    */
    constructor(
        private prestadorService: PrestadorService,
    ) {}

    /**
    * The list of prestadores which belong to the ServiciosHogar
    */
    prestadores: Prestador[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the prestador being edited.
     */
    prestador_edit_id: number;

    /**
    * Asks the service to update the list of prestadores
    */
    getPrestadores(): void {
        this.prestadorService.getPrestadores()
            .subscribe(prestadores => {
                this.prestadores = prestadores;
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
    showHideEdit(prestador_id: number): void {
        if (!this.showEdit || (this.showEdit && prestador_id != this.prestador_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.prestador_edit_id = prestador_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updatePrestador(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of prestadores from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getPrestadores();
    }
}


