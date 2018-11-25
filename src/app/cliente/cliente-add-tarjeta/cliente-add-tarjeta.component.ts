import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Tarjeta } from '../tarjeta';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../cliente/cliente';
@Component({
    selector: 'app-cliente-add-tarjeta',
    templateUrl: './cliente-add-tarjeta.component.html',
    styleUrls: ['./cliente-add-tarjeta.component.css']
})
export class ClienteAddTarjetaComponent implements OnInit, OnChanges {

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
    * The tarjeta to post
    */
    tarjeta: Tarjeta;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a tarjeta has just been posted
    * so that the list of tarjetas refreshes
    */
    @Output() updateTarjetas = new EventEmitter();

    /**
    * This function posts a tarjeta
    * @param tarjetaForm The form of the tarjeta
    */
    postTarjeta(tarjetaForm: NgForm): Tarjeta {
        this.tarjeta.cliente = this.cliente;
        this.clienteService.createTarjeta(this.cliente.id,this.tarjeta)
            .subscribe(() => {
                tarjetaForm.resetForm();
                this.updateTarjetas.emit();
                this.toastrService.success("The tarjeta was successfully created", 'Tarjeta added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.tarjeta;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.tarjeta = new Tarjeta();
    }

    /**
    * The function which notices that the input which defines the cliente_id has changed.
    * If the cliente has changed, we update the tarjetas to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
