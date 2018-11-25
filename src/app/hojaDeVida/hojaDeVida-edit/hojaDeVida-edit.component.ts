import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {HojaDeVidaService} from '../hojaDeVida.service';
import {HojaDeVida} from '../hojaDeVida';


@Component({
    selector: 'app-hojaDeVida-edit',
    templateUrl: './hojaDeVida-edit.component.html',
    styleUrls: ['./hojaDeVida-edit.component.css']
})
export class HojaDeVidaEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param hojaDeVidaService The hojaDeVida's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private hojaDeVidaService: HojaDeVidaService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the hojaDeVida that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() hojaDeVida_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an hojaDeVida
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new hojaDeVida
    */
    @Output() update = new EventEmitter();

    /**
    * The hojaDeVida to edit
    */
    hojaDeVida: HojaDeVida;

    /**
    * Retrieves the information of the hojaDeVida
    */
    getHojaDeVida(): void {
        this.hojaDeVidaService.getHojaDeVida(this.hojaDeVida_id)
            .subscribe(hojaDeVida => {
                this.hojaDeVida = hojaDeVida;
            });
    }

    /**
    * Updates the hojaDeVida's information
    */
    editHojaDeVida(): void {
        this.hojaDeVidaService.updateHojaDeVida(this.hojaDeVida)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The hojaDeVida's information was updated", "HojaDeVida edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the hojaDeVida
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.hojaDeVida = new HojaDeVida();
        this.getHojaDeVida();
    }

    /**
    * The function which is called every time the user chooses to edit a different hojaDeVida
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}
