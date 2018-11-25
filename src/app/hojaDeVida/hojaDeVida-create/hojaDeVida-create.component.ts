import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {HojaDeVidaService} from '../hojaDeVida.service';

import {HojaDeVida} from '../hojaDeVida';

@Component({
    selector: 'app-hojaDeVida-create',
    templateUrl: './hojaDeVida-create.component.html',
    styleUrls: ['./hojaDeVida-create.component.css']
})
export class HojaDeVidaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param hojaDeVidaService The hojasDeVida' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private hojaDeVidaService: HojaDeVidaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new hojaDeVida
    */
    hojaDeVida: HojaDeVida;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an hojaDeVida
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new hojaDeVida
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new hojaDeVida
    */
    createHojaDeVida(): HojaDeVida {
        this.hojaDeVidaService.createHojaDeVida(this.hojaDeVida)
            .subscribe((hojaDeVida) => {
                this.hojaDeVida = hojaDeVida;
                this.create.emit();
                this.toastrService.success("The hojaDeVida was created", "HojaDeVida creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.hojaDeVida;
    }

    /**
    * Informs the parent component that the user no longer wants to create an hojaDeVida
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.hojaDeVida = new HojaDeVida();
    }
}
