import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {SolicitudService} from '../../solicitud/solicitud.service';

import {ClienteDetail} from '../cliente-detail';
import {Solicitud} from '../../solicitud/solicitud';

@Component({
    selector: 'app-cliente-edit',
    templateUrl: './cliente-edit.component.html',
    styleUrls: ['./cliente-edit.component.css'],
    providers: [DatePipe]
})
export class ClienteEditComponent implements OnInit {

    /**
    * The constructor of the component
    * @param clienteService The cliente service which communicates with the API
    * @param solicitudService The solicitud service which communicates with the API
    * @param facturaService The factura service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    * @param router The router which is needed to know when the component needs to reload
    * @param route The route which helps to retrieves the id of the cliente to be shown
    */
    constructor(
        private dp: DatePipe,
        private clienteService: ClienteService,
        private solicitudService: SolicitudService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    model: any;
    /**
    * The cliente which will be updated
    */
    cliente: ClienteDetail

    cliente_id: number;
    /**
    * The list of every solicitud in the ServiciosHogar
    */
    solicitudes: Solicitud[];

    @ViewChild('instance') instance: NgbTypeahead;
    focus$ = new Subject<string>();
    click$ = new Subject<string>();

    formatter = (x: {name: string}) => x.name;

    /**
    * Retrieves the information of the cliente which will be updated
    */
    getCliente(): void {
        this.clienteService.getClienteDetail(this.cliente_id).subscribe(cliente => {
            this.cliente = cliente;
        });
    }

    /**
     * Retrives the information of all the solicitudes in the aplication.
     */
    getSolicitudes(): void {
        this.solicitudService.getSolicitudes().subscribe(solicitudes => {
            this.solicitudes = solicitudes;
            for (let item of this.cliente.solicitudes) {
                for (let i = 0; i < this.solicitudes.length; i++) {
                    if (this.solicitudes[i].id === item.id) {
                        this.solicitudes.splice(i, 1);
                    }
                }
            };
        });
    }

    /**
    * Cancels the edition of the cliente
    */
    cancelEdition(): void {
        this.toastrService.warning('The cliente wasn\'t edited', 'Cliente edition');
        this.router.navigate(['/clientes/list']);
    }

    addSolicitud(): void {
        if (this.model != undefined && this.model.id != undefined) {
            this.cliente.solicitudes.push(this.model);
            for (let i = 0; i < this.solicitudes.length; i++) {
                if (this.solicitudes[i].id === this.model.id) {
                    this.solicitudes.splice(i, 1);
                }
            }
            this.model = new Solicitud();
        }

    }

    removeSolicitud(solicitud): void {
        this.solicitudes.push(solicitud);
        for (let i = 0; i < this.cliente.solicitudes.length; i++) {
            if (this.cliente.solicitudes[i].id == solicitud.id) {
                this.cliente.solicitudes.splice(i, 1);
            }
        }
    }

    /**
    * This function updates the cliente
    */
    updateCliente(): void {
        if (this.cliente.solicitudes.length == 0) {
            this.toastrService.error('The cliente must have at least one solicitud!', 'Error');
        } else {
            this.clienteService.updateCliente(this.cliente)
                .subscribe(() => {
                    this.router.navigate(['/clientes/' + this.cliente.id]);
                    this.toastrService.success("The cliente was successfully edited", 'Cliente edition');
                });
        }
    }

    /**
    * The function which initilizes the component
    */
    ngOnInit() {
        this.cliente_id = +this.route.snapshot.paramMap.get('id');
        this.getCliente();
        this.getSolicitudes();
        this.model = new Solicitud();
    }


}
