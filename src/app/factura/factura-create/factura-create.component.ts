import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {FacturaService} from '../factura.service';

import {Factura} from '../factura';

@Component({
    selector: 'app-factura-create',
    templateUrl: './factura-create.component.html',
    styleUrls: ['./factura-create.component.css'],
    providers: [DatePipe]
})
export class FacturaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param facturaService The facturas' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private dp: DatePipe,
        private facturaService: FacturaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new factura
    */
    factura: Factura;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an factura
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new factura
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new factura
    */
    createFactura(): Factura {
        this.facturaService.createFactura(this.factura)
            .subscribe((factura) => {
                this.factura = factura;
                this.create.emit();
                this.toastrService.success("The factura was created", "Factura creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.factura;
    }

    /**
    * Informs the parent component that the user no longer wants to create an factura
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.factura = new Factura();
    }
}
