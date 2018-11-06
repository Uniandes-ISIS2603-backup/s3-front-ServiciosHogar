/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TarjetaCredito } from '../tarjeta-credito';
import { TarjetaCreditoService } from '../tarjeta-credito.service';


@Component({
    selector: 'app-solicitud-create',
    templateUrl: './tarjeta-credito-create.component.html',
    styleUrls: ['./tarjeta-credito-create.component.css'],
    providers : [DatePipe]
})
export class TarjetaCreditoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param solicitudService The solicitud's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private tarjetaService: TarjetaCreditoService
    ) { }

    /**
    * The new solicitud
    */
   tarjeta: TarjetaCredito;

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
    createTarjeta(): TarjetaCredito {
        console.log(this.tarjeta);
        this.tarjetaService.createTarjeta(this.tarjeta)
            .subscribe((tarjeta) => {
                this.tarjeta = tarjeta;
                this.create.emit();

            });
            return this.tarjeta;
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
        this.tarjeta = new TarjetaCredito();
    }

}

