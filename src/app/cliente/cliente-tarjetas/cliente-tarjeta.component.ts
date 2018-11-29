import { Component, OnInit, Input, } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
    selector: 'app-cliente-tarjetas',
    templateUrl: './cliente-tarjeta.component.html',
})
export class ClienteTarjetaComponent implements OnInit {
    @Input() clienteTarjetas : Tarjeta [];
    @Input() cliente_id: string;

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the tarjeta being edited.
     */
    tarjeta_edit_id: number;

    /**
     * The function called when a tarjeta is posted to update the tarjeta
     */
    updateTarjetas(tarjetas: Tarjeta[]): void {
        this.clienteTarjetas = tarjetas;
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
    showHideEdit(tarjeta_id: number): void {
        if (!this.showEdit || (this.showEdit && tarjeta_id != this.tarjeta_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.tarjeta_edit_id = tarjeta_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateTarjeta(): void {
        this.showEdit = false;
    }

    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
    }
}



