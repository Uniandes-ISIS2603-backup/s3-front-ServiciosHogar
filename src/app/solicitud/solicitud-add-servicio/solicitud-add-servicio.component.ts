import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Servicio } from '../servicio';
import { SolicitudService } from '../solicitud.service';
import { Solicitud } from '../solicitud';
@Component({
    selector: 'app-solicitud-add-servicio',
    templateUrl: './solicitud-add-servicio.component.html',
    styleUrls: ['./solicitud-add-servicio.component.css']
})
export class SolicitudAddServicioComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param solicitudService The solicitud service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService
    ) { }

    /**
    * The solicitud's id
    */
    @Input() solicitud: Solicitud;

    /**
    * The servicio to post
    */
    servicio: Servicio;

    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a servicio has just been posted
    * so that the list of servicios refreshes
    */
    @Output() updateServicios = new EventEmitter();

    /**
    * This function posts a servicio
    * @param servicioForm The form of the servicio
    */
    postServicio(servicioForm: NgForm): Servicio {
        this.servicio.solicitud = this.solicitud;
        this.solicitudService.createServicio(this.solicitud.id,this.servicio)
            .subscribe(() => {
                servicioForm.resetForm();
                this.updateServicios.emit();
                this.toastrService.success('The servicio was successfully created', 'Servicio added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.servicio;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.servicio = new Servicio();
    }

    /**
    * The function which notices that the input which defines the solicitud_id has changed.
    * If the solicitud has changed, we update the servicios to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
