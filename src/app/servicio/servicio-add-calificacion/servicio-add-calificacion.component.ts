import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { ServicioService } from '../servicio.service';
import { Servicio } from '../../servicio/servicio';
@Component({
    selector: 'app-servicio-add-calificacion',
    templateUrl: './servicio-add-calificacion.component.html',
    styleUrls: ['./servicio-add-calificacion.component.css']
})
export class ServicioAddCalificacionComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param servicioService The servicio service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private servicioService: ServicioService,
        private toastrService: ToastrService
    ) { }

    /**
    * The servicio's id
    */
    @Input() servicio: Servicio;

    /**
    * The calificacion to post
    */
    calificacion: Calificacion;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a calificacion has just been posted
    * so that the list of calificacion refreshes
    */
    @Output() updateCalificacion = new EventEmitter();

    /**
    * This function posts a calificacion
    * @param calificacionForm The form of the calificacion
    */
    postCalificacion(calificacionForm: NgForm): Calificacion {
        this.calificacion.servicio = this.servicio;
        this.servicioService.createCalificacion(this.servicio.id,this.calificacion)
            .subscribe(() => {
                calificacionForm.resetForm();
                this.updateCalificacion.emit();
                this.toastrService.success("The calificacion was successfully created", 'Calificacion added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.calificacion;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

    /**
    * The function which notices that the input which defines the servicio_id has changed.
    * If the servicio has changed, we update the calificacion to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
