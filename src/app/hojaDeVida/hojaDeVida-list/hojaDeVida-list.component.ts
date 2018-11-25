import {Component, OnInit} from '@angular/core';

import {HojaDeVida} from '../hojaDeVida';
import {HojaDeVidaService} from '../hojaDeVida.service';

/**
* The component for the list of hojasDeVida in the PrestadorStore
*/
@Component({
    selector: 'app-hojaDeVida',
    templateUrl: './hojaDeVida-list.component.html',
    styleUrls: ['./hojaDeVida-list.component.css']
})
export class HojaDeVidaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param hojaDeVidaService The author's services provider
    */
    constructor(
        private hojaDeVidaService: HojaDeVidaService,
    ) {}

    /**
    * The list of hojasDeVida which belong to the PrestadorStore
    */
    hojasDeVida: HojaDeVida[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the hojaDeVida being edited.
     */
    hojaDeVida_edit_id: number;

    /**
    * Asks the service to update the list of hojasDeVida
    */
    getHojasDeVida(): void {
        this.hojaDeVidaService.getHojasDeVida()
            .subscribe(hojasDeVida => {
                this.hojasDeVida = hojasDeVida;
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
    showHideEdit(hojaDeVida_id: number): void {
        if (!this.showEdit || (this.showEdit && hojaDeVida_id != this.hojaDeVida_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.hojaDeVida_edit_id = hojaDeVida_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateHojaDeVida(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of hojasDeVida from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getHojasDeVida();
    }
}


