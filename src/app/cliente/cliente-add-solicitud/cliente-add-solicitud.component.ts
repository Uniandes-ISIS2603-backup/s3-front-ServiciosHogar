import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Solicitud } from '../solicitud';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../cliente/cliente';
@Component({
    selector: 'app-cliente-add-solicitud',
    templateUrl: './cliente-add-solicitud.component.html',
    styleUrls: ['./cliente-add-solicitud.component.css']
})
export class ClienteAddSolicitudComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param clienteService The cliente service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ) { }

    /**
    * The cliente's id
    */
    @Input() cliente: Cliente;

    /**
    * The solicitud to post
    */
    solicitud: Solicitud;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a solicitud has just been posted
    * so that the list of solicitudes refreshes
    */
    @Output() updateSolicitudes = new EventEmitter();

    /**
    * This function posts a solicitud
    * @param reviewForm The form of the solicitud
    */
    postReview(reviewForm: NgForm): Solicitud {
        this.solicitud.cliente = this.cliente;
        this.clienteService.createSolicitud(this.cliente.id,this.solicitud)
            .subscribe(() => {
                reviewForm.resetForm();
                this.updateSolicitudes.emit();
                this.toastrService.success("The solicitud was successfully created", 'Solicitud added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.solicitud;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.solicitud = new Solicitud();
    }

    /**
    * The function which notices that the input which defines the cliente_id has changed.
    * If the cliente has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}