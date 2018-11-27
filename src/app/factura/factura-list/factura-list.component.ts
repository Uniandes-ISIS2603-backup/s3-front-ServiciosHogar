import {Component, OnInit} from '@angular/core';

import {Factura} from '../factura';
import {FacturaService} from '../factura.service';

/**
* The component for the list of facturas in the SolicitudStore
*/
@Component({
    selector: 'app-factura',
    templateUrl: './factura-list.component.html',
    styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param facturaService The servicio's services provider
    */
    constructor(
        private facturaService: FacturaService,
    ) {}

    /**
    * The list of facturas which belong to the SolicitudStore
    */
    facturas: Factura[];

    /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    /**
     * Shows or hides the edit component.
     */
    showEdit: boolean;

    /**
     * The id of the factura being edited.
     */
    factura_edit_id: number;

    /**
    * Asks the service to update the list of facturas
    */
    getFacturas(): void {
        this.facturaService.getFacturas()
            .subscribe(facturas => {
                this.facturas = facturas;
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
    showHideEdit(factura_id: number): void {
        if (!this.showEdit || (this.showEdit && factura_id != this.factura_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.factura_edit_id = factura_id;
        }
        else {
            this.showEdit = false;
        }
    }

    updateFactura(): void {
        this.showEdit = false;
    }

    /**
    * This will initialize the component by retrieving the list of facturas from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
        this.getFacturas();
    }
}


