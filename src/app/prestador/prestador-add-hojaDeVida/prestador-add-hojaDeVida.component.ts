import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { HojaDeVida } from '../hojaDeVida';
import { PrestadorService } from '../prestador.service';
import { Prestador } from '../../prestador/prestador';
@Component({
    selector: 'app-prestador-add-hojaDeVida',
    templateUrl: './prestador-add-hojaDeVida.component.html',
    styleUrls: ['./prestador-add-hojaDeVida.component.css']
})
export class PrestadorAddHojaDeVidaComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param prestadorService The prestador service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private prestadorService: PrestadorService,
        private toastrService: ToastrService
    ) { }

    /**
    * The prestador's id
    */
    @Input() prestador: Prestador;

    /**
    * The hojaDeVida to post
    */
    hojaDeVida: HojaDeVida;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a hojaDeVida has just been posted
    * so that the list of hojaDeVida refreshes
    */
    @Output() updateHojaDeVida = new EventEmitter();

    /**
    * This function posts a hojaDeVida
    * @param hojaDeVidaForm The form of the hojaDeVida
    */
    postHojaDeVida(hojaDeVidaForm: NgForm): HojaDeVida {
        this.hojaDeVida.prestador = this.prestador;
        this.prestadorService.createHojaDeVida(this.prestador.id,this.hojaDeVida)
            .subscribe(() => {
                hojaDeVidaForm.resetForm();
                this.updateHojaDeVida.emit();
                this.toastrService.success("The hojaDeVida was successfully created", 'HojaDeVida added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.hojaDeVida;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.hojaDeVida = new HojaDeVida();
    }

    /**
    * The function which notices that the input which defines the prestador_id has changed.
    * If the prestador has changed, we update the hojaDeVida to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
