import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';


import {FacturaService} from '../factura.service';
import {Factura} from '../factura';


@Component({
    selector: 'app-factura-edit',
    templateUrl: './factura-edit.component.html',
    styleUrls: ['./factura-edit.component.css']
})
export class FacturaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param facturaService The factura's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private facturaService: FacturaService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
    * The id of the factura that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() factura_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an factura
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new factura
    */
    @Output() update = new EventEmitter();

    /**
    * The factura to edit
    */
    factura: Factura;

    /**
    * Retrieves the information of the factura
    */
    getFactura(): void {
        this.facturaService.getFactura(this.factura_id)
            .subscribe(factura => {
                this.factura = factura;
            });
    }

    /**
    * Updates the factura's information
    */
    editFactura(): void {
        this.facturaService.updateFactura(this.factura)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The factura's information was updated", "Factura edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the factura
    */
    cancelEdition(): void {
        this.toastrService.warning('The factura wasn\'t edited', 'factura edition');
        this.router.navigate(['/facturas/' + this.factura.numero]);
    }

    /**
    * This function updates the factura
    */
   updateFactura(): void {
    this.facturaService.updateFactura(this.factura)
        .subscribe(() => {
            this.router.navigate(['/facturas/' + this.factura.numero]);
            this.toastrService.success("The factura was successfully edited", 'Factura edition');
        });
    this.router.navigate(['/facturaes/' + this.factura.numero]);
}
    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.factura = new Factura();
        this.getFactura();
    }

    /**
    * The function which is called every time the user chooses to edit a different factura
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
