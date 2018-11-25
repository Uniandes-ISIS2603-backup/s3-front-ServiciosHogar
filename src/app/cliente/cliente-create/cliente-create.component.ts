import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {Solicitud} from '../../solicitud/solicitud';

@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html',
    styleUrls: ['./cliente-create.component.css'],
    providers: [DatePipe]
})
export class ClienteCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param clienteService The clientes' services provider
    * @param solicitudService The solicitudes' services provider
    * @param facturaService The facturas' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private clienteService: ClienteService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new cliente
    */
    cliente: Cliente;

    /**
    * The list of all the solicitudes in the ServiciosHogar
    */
    solicitudes: Solicitud[];

    /**
    * The solicitudes of the new cliente
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    clienteSolicitudes: Solicitud[];

    /**
    * Cancels the creation of the new cliente
    * Redirects to the clientes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The cliente wasn\'t created', 'Cliente creation');
        this.router.navigate(['/clientes/list']);
    }

    /**
    * Creates a new cliente
    */
    createCliente(): Cliente {
        this.clienteService.createCliente(this.cliente)
            .subscribe(cliente => {
                this.cliente.id = cliente.id;
                this.router.navigate(['/clientes/' + cliente.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.cliente;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cliente = new Cliente();
    }

}
