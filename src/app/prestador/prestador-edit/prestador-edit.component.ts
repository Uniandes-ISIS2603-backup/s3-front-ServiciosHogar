import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {PrestadorService} from '../prestador.service';
import {PrestadorDetail} from '../prestador-detail';


@Component({
    selector: 'app-prestador-edit',
    templateUrl: './prestador-edit.component.html',
    styleUrls: ['./prestador-edit.component.css']
})
export class PrestadorEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param prestadorService The prestador's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private prestadorService: PrestadorService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the prestador that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() prestador_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an prestador
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new prestador
    */
    @Output() update = new EventEmitter();

    /**
    * The prestador to edit
    */
    prestador: PrestadorDetail;

    /**
    * Retrieves the information of the prestador
    */
    getPrestador(): void {
        this.prestadorService.getPrestadorDetail(this.prestador_id)
            .subscribe(prestador => {
                this.prestador = prestador;
            });
    }

    /**
    * Updates the prestador's information
    */
    editPrestador(): void {
        this.prestadorService.updatePrestador(this.prestador)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The prestador's information was updated", "Prestador edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the prestador
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.prestador = new PrestadorDetail();
        this.getPrestador();
    }

    /**
    * The function which is called every time the user chooses to edit a different prestador
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
