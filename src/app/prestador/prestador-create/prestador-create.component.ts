import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {PrestadorService} from '../prestador.service';

import {Prestador} from '../prestador';

@Component({
    selector: 'app-prestador-create',
    templateUrl: './prestador-create.component.html',
    styleUrls: ['./prestador-create.component.css']
})
export class PrestadorCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param prestadorService The prestadores' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private prestadorService: PrestadorService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new prestador
    */
    prestador: Prestador;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an prestador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new prestador
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new prestador
    */
    createPrestador(): Prestador {
        this.prestadorService.createPrestador(this.prestador)
            .subscribe((prestador) => {
                this.prestador = prestador;
                this.create.emit();
                this.toastrService.success("The prestador was created", "Prestador creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.prestador;
    }

    /**
    * Informs the parent component that the user no longer wants to create an prestador
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.prestador = new Prestador();
    }
}
