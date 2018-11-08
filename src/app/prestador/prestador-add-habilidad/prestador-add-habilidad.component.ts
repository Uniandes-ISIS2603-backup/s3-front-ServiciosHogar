import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Habilidad} from '../habilidad';
import { PrestadorService } from '../prestador.service';
import {Prestador} from '../../prestador/prestador';
@Component({
    selector: 'app-prestador-add-habilidad',
    templateUrl: './prestador-add-habilidad.component.html',
    styleUrls: ['./prestador-add-habilidad.component.css']
})
export class PrestadorAddHabilidadComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param prestadorService The prestador service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private prestadorService: PrestadorService,
    ) { }

    /**
    * The prestador's id
    */
    @Input() prestador: Prestador;

    /**
    * The habilidad to post
    */
    habilidad: Habilidad;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a habilidad has just been posted
    * so that the list of habilidads refreshes
    */
    @Output() updateHabilidades = new EventEmitter();

    /**
    * This function posts a habilidad
    * @param habilidadForm The form of the habilidad
    */
    postHabilidad(habilidadForm: NgForm): Habilidad {
        this.habilidad.prestador = this.prestador;
        this.prestadorService.createHabilidad(this.prestador.id,this.habilidad)
            .subscribe(() => {
                habilidadForm.resetForm();
                this.updateHabilidades.emit();
            });
        return this.habilidad;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.habilidad = new Habilidad();
    }

    /**
    * The function which notices that the input which defines the prestador_id has changed.
    * If the prestador has changed, we update the habilidads to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}



